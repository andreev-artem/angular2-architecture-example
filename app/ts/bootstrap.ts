import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
import {App, ALL_PROVIDERS} from "./app";

ALL_PROVIDERS.push([
    provide(APP_BASE_HREF, {useValue: '/'}),
]);

bootstrap(App, ALL_PROVIDERS);