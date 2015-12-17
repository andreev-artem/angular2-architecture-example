import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {UsersList} from "./users/list";

@Component({
    selector: 'admin',
    templateUrl: '/js/components/admin/admin.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: UsersList, as: 'UsersList', useAsDefault: true}
])
export class Admin {

}