export interface IAlgoliaSettings {
    url: string;
    writeUrl: string;
    searchUrl: string;
    appId: string;
    addKey: string;
    searchKey: string;
}

export class ConfigBase {
    gitHubApiUrl = 'https://api.github.com';
    algolia = {
        url: '',
        writeUrl: 'https://1R74L48YI3.algolia.net',
        searchUrl: 'https://1R74L48YI3-dsn.algolia.net',
        appId: '1R74L48YI3',
        addKey: '7bdd7eb98a83f3f875d8643a34d8cd24',
        searchKey: '1cf4d745f6c87fff3fadb8585e936367'
    }
}