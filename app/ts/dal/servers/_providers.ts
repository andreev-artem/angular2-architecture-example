import {provide} from 'angular2/core';
import {Http} from 'angular2/http';
import {CONFIG} from '../../config';
import {AdminServer} from "./adminServer";
import {GitHubServer} from "./gitHubServer";
import {AlgoliaServer} from "./algoliaServer";

export const SERVER_PROVIDERS = [
    provide(AdminServer, {
        useFactory: http => new AdminServer(CONFIG.apiUrl, http),
        deps: [Http]
    }),
    provide(GitHubServer, {
        useFactory: http => new GitHubServer(CONFIG.gitHubApiUrl, http),
        deps: [Http]
    }),
    provide(AlgoliaServer, {
        useFactory: http => new AlgoliaServer(CONFIG.algolia, http),
        deps: [Http]
    })
];