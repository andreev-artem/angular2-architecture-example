import {ConfigBase} from "./configBase";

class Config extends ConfigBase{
    apiUrl = 'http://ng2test.getsandbox.com'
}

export {IAlgoliaSettings} from "./configBase";
export const CONFIG = new Config();