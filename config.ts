import path from "path";
import *  as cacheManager from 'cache-manager';
const { DiskStore } = require('cache-manager-fs-hash');

export type Configuration = {
    cacheFolder: string;
    cacheManager: cacheManager.Cache;
    sources: {
        [key: string]: string;
    }
}
const cacheFolder = path.join(__dirname, 'cache');

export const config: Configuration = {
    cacheFolder,
    cacheManager: cacheManager.createCache({
        stores: [new DiskStore({
            path: cacheFolder,
            // ttl: no expiration
        })],
    }),
    sources: {
        mledoze: 'https://raw.githubusercontent.com/mledoze/countries/refs/heads/master/countries.json'
    }
}


export async function getConfig(): Promise<Configuration> {
    return config;
}