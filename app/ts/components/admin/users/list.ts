import {Component} from 'angular2/core';
import {UserClient} from "../../../bl/admin/userClient";
import {User} from "../../../bl/admin/user";

@Component({
    selector: 'list',
    templateUrl: '/js/components/admin/users/list.html',
    directives: []
})
export class UsersList {

    users: User[];

    constructor(private _userClient: UserClient) {
        this._userClient.getAll().subscribe(data => this.users = data.users);
    }

}