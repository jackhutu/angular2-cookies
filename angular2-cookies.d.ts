export declare class Cookie {
    static load(name: string): string;
    static save(name: string, value: string, expires?: number, path?: string, domain?: string): void;
    static remove(name: string, path?: string, domain?: string): void;
}
