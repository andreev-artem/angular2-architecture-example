import {bootstrap, provide} from 'angular2/angular2';
import {APP_BASE_HREF} from 'angular2/router';
import {App, ALL_PROVIDERS} from "./app";

ALL_PROVIDERS.push([
    provide(APP_BASE_HREF, {useValue: '/'}),
]);

bootstrap(App, ALL_PROVIDERS);