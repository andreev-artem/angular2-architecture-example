import {Component} from 'angular2/core';
import {UserClient} from "../../../bl/userClient";
import {User} from "../../../bl/user";

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