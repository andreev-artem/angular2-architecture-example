import {GitHubUser} from "./user";

export class GitHubMilestone {
    url: string;
    html_url: string;
    labels_url: string;
    id: number;
    number: number;
    state: string;
    title: string;
    description: string;
    creator: GitHubUser;
    open_issues: number;
    closed_issues: number;
    created_at: string;
    created_at_timestamp: Number;
    updated_at: string;
    updated_at_timestamp: Number;
    closed_at: string;
    closed_at_timestamp: Number;
    due_on: string;
    due_on_timestamp: Number;

    static fromJson(data: any): GitHubMilestone {
        let milestone = new GitHubMilestone();

        Object.assign(milestone, data);

        milestone.closed_at_timestamp = Date.parse(milestone.closed_at);
        milestone.created_at_timestamp = Date.parse(milestone.created_at);
        milestone.updated_at_timestamp = Date.parse(milestone.updated_at);
        milestone.due_on_timestamp = Date.parse(milestone.due_on);

        return milestone;
    }
}