import {Component, bootstrap, CORE_DIRECTIVES, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {
    RouteConfig,
    LocationStrategy,
    PathLocationStrategy,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';

import {API_PROVIDERS} from './dal/real/_apiProviders';
import {BL_PROVIDERS} from './bl/_blProviders';
import {Navbar} from "./components/_top/navbar/navbar";
import {Home} from "./components/home/home";
import {Admin} from "./components/admin/admin";

@Component({
    selector: 'app',
    templateUrl: '/js/app.html',
    directives: [ROUTER_DIRECTIVES, Navbar]
})
@RouteConfig([
    { path: '/', component: Home, as: 'Home'},
    { path: '/admin/...', component: Admin, as: 'Admin'}
])
export class App {
}

export let ALL_PROVIDERS = [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy}),
    API_PROVIDERS,
    BL_PROVIDERS
];
