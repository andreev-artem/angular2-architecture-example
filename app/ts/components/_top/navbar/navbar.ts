import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: '/js/components/_top/navbar/navbar.html',
    directives: [ROUTER_DIRECTIVES]
})
export class Navbar {

    constructor() {
    }

}

