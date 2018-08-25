export class ResourceDependency {
    _file_name: string;
    type: string;

    get file_name(): string {
        return this._file_name;
    }
    set file_name(name: string) {
        this._file_name = name;
    }
}
