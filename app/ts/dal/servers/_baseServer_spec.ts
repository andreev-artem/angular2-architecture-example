import {
    TestComponentBuilder,
    describe,
    expect,
    inject,
    beforeEachProviders,
    it
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {BaseServer} from "./_baseServer";

export function main() {

    class MockHttp implements Http {

        get: Function;
        post: Function;

        constructor(){
            this.get = jasmine.createSpy('get').and.returnValue(Observable.of({}));
            this.post = jasmine.createSpy('post').and.returnValue(Observable.of({}));
        }

    }

    describe('get', () => {

        let http = new MockHttp();
        beforeEachProviders(() => [
            provide(BaseServer, {useValue: new BaseServer('http://test', http)})
        ]);

        it('should properly call Http.get', inject([BaseServer], (baseServer) => {
            baseServer.get('/users', {a: 'b'});

            expect(http.get.calls.mostRecent().args[0]).toBe('http://test/users');
            expect(http.get.calls.mostRecent().args[1]['search'].toString()).toBe('a=b');
        }));

    });

}