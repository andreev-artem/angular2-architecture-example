import {Component} from 'angular2/angular2';

@Component({
    selector: 'home',
    templateUrl: '/js/components//home/home.html',
    directives: []
})
export class Home {

    name: string = 'World';

    constructor() {
        setTimeout(() => {
            this.name = 'NEW World'
        }, 2000);
    }
}