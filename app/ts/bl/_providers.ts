import {UserClient} from "./admin/userClient";
import {IssuesClient} from "./gitHub/issuesClient";

export const BL_PROVIDERS = [
    UserClient,
    IssuesClient
];