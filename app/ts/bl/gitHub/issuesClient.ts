import {Injectable} from 'angular2/core';
import {Observable} from '../../rxBundle';

import {Issue} from './issue';
import {GitHubIssuesApi} from "../../dal/api/gitHubIssuesApi";
import {AlgoliaApi} from "../../dal/api/algoliaApi";

@Injectable()
export class IssuesClient {

    constructor(private _gitHubApi: GitHubIssuesApi, private _algoliaApi: AlgoliaApi) {
    }

    getUpdatedIssues(numPages: Number){
        return Observable.range(1, numPages)
            .map((i) => {
                return this._gitHubApi.getForRepo('angular', 'angular', {
                    state: 'all',
                    sort: 'updated',
                    page: i,
                    per_page: 100
                })
            })
            .mergeAll()
            .reduce((res, response) => {
                response.forEach(issueData => res.push(Issue.fromJson(issueData)));
                return res;
            }, []);
    }

    updateIssues(issues: Issue[]) {
        return this._algoliaApi.updateBatch('github-angular-issues', issues);
    }

    search(){
        return this._algoliaApi.query('github-angular-issues', {
            attributesToRetrieve: '*',
            facets: '*',
            hitsPerPage: 1});
    }

}