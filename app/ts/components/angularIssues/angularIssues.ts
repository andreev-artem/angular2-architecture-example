import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {IssuesClient} from "../../bl/gitHub/issuesClient";
import {Issue} from "../../bl/gitHub/issue";
import {MoreLess} from "../../directives/moreLess";
import {SlicePipe} from "../../pipes/purePipe";

@Component({
    selector: 'angularIssues',
    templateUrl: '/js/components/angularIssues/angularIssues.html',
    directives: [ROUTER_DIRECTIVES, MoreLess],
    pipes: [SlicePipe]
})
export class AngularIssues {

    issuesPages: Number = 5;
    issues: Issue[];
    facets: any;

    constructor(private _issuesClient: IssuesClient) {
        this._search();
    }

    onUpdateIssues() {
        this._issuesClient.getUpdatedIssues(this.issuesPages).subscribe(issues => {
            this.issues = issues;

            this._issuesClient.updateIssues(this.issues).subscribe(_ => {
                this._search();
            });
        });
    }

    _search() {
        this._issuesClient.search().subscribe(response => {
            this.facets = Object.keys(response.facets).map(key => {
                var values = response.facets[key];
                return {name: key, values: Object.keys(values).map(key => ({name: key, value: values[key]}))};
            });
            this.facets = this.facets.sort((a, b) => a.name.localeCompare(b.name));
        });
    }

}