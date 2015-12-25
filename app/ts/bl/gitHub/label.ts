export class GitHubLabel {
    url: string;
    name: string;
    color: string;

    toDict() {
        let dict = {};
        let curLevel = dict;
        let name = this.name;
        name.split(':')
            .map(part => part.trim())
            .map((part, index, array) => {
                if(index < array.length - 2) {
                    curLevel[part] = {};
                    curLevel = curLevel[part];
                } else if (index == array.length - 2){
                    // 'comp: core/view/compiler' => {comp: ['core', 'core/view', 'core/view/compiler'']}
                    let value = array[index + 1];
                    let parts = value.split('/');
                    curLevel[part] = parts.map((part, i) => parts.slice(0, i + 1).join('/'));
                }
            });
        return dict;
    }

    static fromJson(data: any): GitHubLabel {
        let label = new GitHubLabel();
        Object.assign(label, data);
        return label;
    }
}