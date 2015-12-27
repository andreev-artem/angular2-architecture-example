import {Directive, Input, ViewContainerRef} from 'angular2/core';

@Directive({
    selector: '[moreLess]',
    inputs: ['moreLess'],
    exportAs: 'moreLess'
})
export class MoreLess {
    @Input('moreLess') private _params: {on: Number, show: Number};
    private _show: Number;
    
    hasToggle: boolean;
    limit: Number;
    isCollapsed: boolean = true;

    set _params(newVal) {
        this.hasToggle = newVal.on > newVal.show;
        this.limit = this.isCollapsed ? newVal.show : undefined;
        this._show = newVal.show;
    }

    toggle(){
        this.isCollapsed = !this.isCollapsed;
        this.limit = this.isCollapsed ? this._show : undefined;
    }

}