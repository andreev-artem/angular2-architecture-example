export class GitHubPullRequest {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;

    static fromJson(data:any): GitHubPullRequest {
        let pr = new GitHubPullRequest();
        Object.assign(pr, data);
        return pr;
    }
}