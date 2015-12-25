import {Injectable} from 'angular2/core';
import {URLSearchParams} from 'angular2/http';
import {AdminServer} from "../servers/adminServer";

@Injectable()
export class UserApi {

    constructor(private _server: AdminServer){}

    getAll(page?: number, limit: number = 10): any {
        let queryParams = new URLSearchParams();
        if(page != null){
            queryParams.set('page', page.toString());
        }
        queryParams.append('limit', limit.toString());
        return this._server.get('/users', queryParams);
    }

}