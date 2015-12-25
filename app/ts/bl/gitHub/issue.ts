import {GitHubUser} from "./user";
import {GitHubLabel} from "./label";
import {GitHubMilestone} from "./milestone";
import {GitHubPullRequest} from "./pullRequest";

export class Issue {

    id: number;
    url: string;
    labels_url: string;
    comments_url: string;
    events_url: string;
    html_url: string;
    number: number;
    state: string;
    title: string;
    body: string;
    user: GitHubUser;
    labels: GitHubLabel[];
    labelsDict: Object;
    assignee: GitHubUser;
    milestone: GitHubMilestone;
    locked: boolean;
    comments: number;
    pull_request: GitHubPullRequest;
    closed_at: string;
    closed_at_day: string;
    closed_at_timestamp: Number;
    created_at: string;
    created_at_day: string;
    created_at_timestamp: Number;
    updated_at: string;
    updated_at_day: string;
    updated_at_timestamp: Number;

    static fromJson(data: any): Issue {
        let issue = new Issue();

        Object.assign(issue, data);

        issue.user = GitHubUser.fromJson(issue.user);
        if(issue.labels) {
            issue.labels = issue.labels.map(label => GitHubLabel.fromJson(label));
            issue.labelsDict = issue.labels.reduce((res, label) => {
                Object.assign(res, label.toDict());
                return res;
            }, {});
        }
        issue.assignee = GitHubUser.fromJson(issue.assignee);
        issue.milestone = GitHubMilestone.fromJson(issue.milestone);
        issue.pull_request = GitHubPullRequest.fromJson(issue.pull_request);

        issue.created_at_day = issue.created_at.substr(0, issue.created_at.indexOf('T'));
        issue.updated_at_day = issue.updated_at.substr(0, issue.updated_at.indexOf('T'));
        if (issue.closed_at) {
            issue.closed_at_day = issue.closed_at.substr(0, issue.closed_at.indexOf('T'));
        }
        issue.closed_at_timestamp = Date.parse(issue.closed_at);
        issue.created_at_timestamp = Date.parse(issue.created_at);
        issue.updated_at_timestamp = Date.parse(issue.updated_at);

        return issue;
    }

}