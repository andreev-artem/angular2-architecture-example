import {Pipe, PipeTransform} from 'angular2/core';

// https://github.com/angular/angular/issues/5918
@Pipe({name: 'pureSlice'})
export class SlicePipe implements PipeTransform {
    transform(value:any, args:any[] = null):any {
        if (!args) {
            throw new Error('Slice pipe requires one argument');
        }
        if (!this._supports(value)) {
            throw new Error('Slice pipe can be used only with string or arrays');
        }
        if (!value) return value;
        var start:number = args[0];
        var end:number = args.length > 1 ? args[1] : null;
        if (typeof value === 'string') {
            return value.substring(start, end);
        }
        return value.slice(start, end);
    }

    private _supports(obj:any):boolean {
        return typeof obj === 'string' || Array.isArray(obj);
    }
}
