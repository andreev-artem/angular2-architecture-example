import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {BaseServer} from "./_baseServer";
import {IAlgoliaSettings} from "../../config";

@Injectable()
export class AlgoliaServer extends BaseServer {

    constructor(public algoliaSettings: IAlgoliaSettings, _http: Http) {
        super(algoliaSettings.url, _http);
    }

    get addHeaders() {
        return new Headers({
            'X-Algolia-Application-Id': this.algoliaSettings.appId,
            'X-Algolia-API-Key': this.algoliaSettings.addKey
        });
    }

    get searchHeaders() {
        return new Headers({
            'X-Algolia-Application-Id': this.algoliaSettings.appId,
            'X-Algolia-API-Key': this.algoliaSettings.searchKey
        });
    }

}