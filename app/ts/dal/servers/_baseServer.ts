import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, RequestOptionsArgs} from 'angular2/http';

@Injectable()
export class BaseServer {

    constructor(private _baseUrl: string, protected _http: Http) {}

    private _getFullUrl(name: string): string {
        return this._baseUrl + name;
    }

    get(name: string, params?: URLSearchParams | any): any {
        let queryParams = params;
        if(params && !(params instanceof URLSearchParams)) {
            queryParams = new URLSearchParams();
            for(let key in params) {
                queryParams.set(key, params[key].toString());
            }
        }
        return this._http.get(this._getFullUrl(name), {search: queryParams}).map((res: any) => res.json());
    }

    post(name: string, data: Object, requestOptions?: RequestOptionsArgs): any {
        return this._http.post(this._getFullUrl(name), JSON.stringify(data), requestOptions).map((res: any) => res.json());
    }

}