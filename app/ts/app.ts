import {Component, provide} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {
    RouteConfig,
    LocationStrategy,
    PathLocationStrategy,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';
import {Observable} from 'rxBundle';

import {SERVER_PROVIDERS} from "./dal/servers/_providers";
import {API_PROVIDERS} from './dal/api/_providers';
import {BL_PROVIDERS} from './bl/_providers';
import {Navbar} from "./components/_top/navbar/navbar";
import {Home} from "./components/home/home";
import {Admin} from "./components/admin/admin";
import {AngularIssues} from "./components/angularIssues/angularIssues";

@Component({
    selector: 'app',
    templateUrl: '/js/app.html',
    directives: [ROUTER_DIRECTIVES, Navbar]
})
@RouteConfig([
    { path: '/', component: Home, as: 'Home'},
    { path: '/admin/...', component: Admin, as: 'Admin'},
    { path: '/angularIssues', component: AngularIssues, as: 'AngularIssues'}
])
export class App {
}

export let ALL_PROVIDERS = [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy}),
    SERVER_PROVIDERS,
    API_PROVIDERS,
    BL_PROVIDERS
];
