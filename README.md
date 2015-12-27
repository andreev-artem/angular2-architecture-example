# Experiments with a possible Angular2 project architecture [![Build Status][travis-image]][travis-url]

It should cover the following tasks:

- [x] multi-tier architecture:

    * `dal` - Data Access Layer:
        * `servers/*` - abstraction of the HTTP/AJAX calls. Supports multiple servers and  configurable PRODUCTION and SANDBOX urls.
         May handle any server specifics like settings (eg: withCredentials), raw-errors handling, common params, transforms, etc
        * `api/*` - set of pure (without any logic) endpoint-based methods to talk with your servers.
         Will be replaced by a Fake API layer for e2e.
        * `fake/*` - Fake API layer for e2e
    * `bl` - Business layer - your business reusable logic which will be used by components (send/retrieve, caching, validation, common logic, etc).
    * `components` - components with pages logic.
    * ... - any other semantically-named sets of project-specific entities (eg: cards, actions, widgets, etc)

- [x] project skeleton
    - [x] dev workflow gulp tasks
    - [x] unit-tests
        - [x] base skeleton + simple examples
        - [ ] coverage
    - [x] e2e (protractor)
    - [x] routing
    - [x] production gulp tasks
        - [x] build
        - [x] unit
        - [x] e2e using Chrome
        - [ ] e2e using FF
    - [x] CI - Travis
- [ ] functionality
    - [x] very-very basic app functionality (actually almost nothing - just load some data from server (production/sandbox/fake) and display list)
    - [ ] search ans statistic for https://github.com/angular/angular/issues using Algolia
        - [x] retrieve issues from GitHub => process => add/update on Algolia
        - [x] display facets
        - [x] showMore directive
        - [ ] unit-tests
        - [ ] e2e
        - [ ] filter using facets
        - [ ] search
        - ...
    - [ ] ... to be continued
- [ ] [Hot Loader](http://blog.mgechev.com/2015/10/26/angular2-hot-loader-hot-loading-tooling/)

## Installing Local Env

* `npm i -g gulp`
* `npm i`

## Running Local Env

* `gulp server`

    http://localhost - dev app with sandbox API urls
    
    http://localhost/mocked/ - dev app with Fake API data
    
* `gulp server --env=production`

    http://localhost - dev app with production API urls
    
* `gulp unit`

    run unit-tests in auto-watch mode using PhantomJS
    
* `gulp unit --browser=Chrome`

    run unit-tests in auto-watch mode using Chrome
    
* `gulp ci-unit`

    run unit-tests in continuous integration mode using PhantomJS
    
* `gulp e2e`

    run e2e tests using Chrome
    
* `gulp build`

    build dist version of the app
    
* `gulp dist-e2e`

    run e2e tests for the dist version app (`gulp build` must be run before)

[travis-image]:https://travis-ci.org/andreev-artem/angular2-architecture-example.svg?branch=master
[travis-url]: https://travis-ci.org/andreev-artem/angular2-architecture-example