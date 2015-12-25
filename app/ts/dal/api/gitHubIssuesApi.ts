import {Injectable} from 'angular2/core';
import {URLSearchParams} from 'angular2/http';
import {GitHubServer} from "../servers/gitHubServer";

export interface IGitHubRequest {
    per_page?: number;
    page?: number;
}

export interface IRepoIssuesRequest extends IGitHubRequest{
    state?: string;
    updated?: string,
    since?: string;
}

@Injectable()
export class GitHubIssuesApi {

    constructor(private _server: GitHubServer){

    }

    getForRepo(owner, repo, request: IRepoIssuesRequest){
        return this._server.get(`/repos/${owner}/${repo}/issues`, request);
    }
}