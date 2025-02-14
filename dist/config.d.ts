import * as cacheManager from 'cache-manager';
export type Configuration = {
    cacheFolder: string;
    cacheManager: cacheManager.Cache;
    sources: {
        [key: string]: string;
    };
};
export declare const config: Configuration;
export declare function getConfig(): Promise<Configuration>;
//# sourceMappingURL=config.d.ts.map