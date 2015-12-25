import {ConfigBase} from "./configBase";

class Config extends ConfigBase{
    apiUrl = 'http://ng2testsandbox.getsandbox.com'
}

export {IAlgoliaSettings} from "./configBase";
export const CONFIG = new Config();
