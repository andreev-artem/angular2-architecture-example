import {
    TestComponentBuilder,
    describe,
    expect,
    inject,
    beforeEachProviders,
    it
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {AdminServer} from "../../dal/servers/adminServer";
import {UserClient} from "./userClient";
import {UserApi} from "../../dal/api/userApi";
import {Observable} from 'rxjs/Rx';

export function main() {

    var result;
    class MockUserApi extends UserApi {

        getAll(){
            return Observable.of(result);
        }

    }

    describe('getAll', () => {

        beforeEachProviders(() => [
            provide(AdminServer, {useValue: {}}),
            provide(UserApi, {useClass: MockUserApi}),
            UserClient
        ]);

        it('should return properly constructed result', inject([UserClient], (uc) => {
            result = {
                data: [],
                total: 0
            };

            uc.getAll().subscribe(result => {
                expect(result.users).toEqual([]);
                expect(result.total).toBe(0);
            });
        }));

    });

}