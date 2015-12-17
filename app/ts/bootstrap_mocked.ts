import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
import {App, ALL_PROVIDERS} from "./app";
import {API_PROVIDERS} from './dal/real/_apiProviders';
import {FAKE_API_PROVIDERS} from './dal/fake/_fakeApiProviders';

ALL_PROVIDERS.push(FAKE_API_PROVIDERS);
ALL_PROVIDERS.push([
    provide(APP_BASE_HREF, {useValue: '/mocked/'}),
]);

bootstrap(App, ALL_PROVIDERS);