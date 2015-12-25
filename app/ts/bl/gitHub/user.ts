export class GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string = 'User';
    site_admin: boolean;

    static fromJson(data: any): GitHubUser {
        let user = new GitHubUser();
        Object.assign(user, data);
        return user;
    }
}