import {Injectable} from 'angular2/core';
import {AlgoliaServer} from "../servers/algoliaServer";

@Injectable()
export class AlgoliaApi {

    constructor(private _server: AlgoliaServer) {
    }

    _serializeQueryParams(params) {
        params = Object.assign({}, params);
        // this field is used only internally, Algolia doesn't have such param
        delete params.sortOrder;
        params = Object.keys(params).map(function (key) {
            if (Array.isArray(params[key])) {
                params[key] = JSON.stringify(params[key]);
            }
            params[key] = encodeURIComponent(params[key]);
            return `${key}=${params[key]}`;
        });
        return params.join('&');
    };

    query(indexName, searchParams: Object) {
        return this._server.post(
            `${this._server.algoliaSettings.searchUrl}/1/indexes/${indexName}/query`,
            {params: this._serializeQueryParams(searchParams)},
            {headers: this._server.searchHeaders}
        );
    }

    updateBatch(indexName: string, items: any[]) {
        let requests = items.map(item => {
            let obj = Object.assign({}, item);
            obj.objectID = obj.id;
            return {
                action: 'updateObject',
                body: obj
            };
        });
        return this._server.post(
            `${this._server.algoliaSettings.writeUrl}/1/indexes/${indexName}/batch`,
            {requests},
            {headers: this._server.addHeaders}
        );
    }

}