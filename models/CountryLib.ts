import debug from 'debug';
import { CountryData } from "./CountryData";
import { downloadJson } from "../inc/downloadJson";
import { Configuration, config } from "../config";

const log = debug('_countrylib');
const CACHE_KEY = 'countrylib';

export class CountryLib {
    public data: CountryData[] = [];

    constructor(private _config: Configuration = config) {
        log('constructor',_config);
    }

    async loadData() : Promise<this> {
        const outcome = await this.hasCachedData();
        if (!outcome) {
            log('no cached data, refreshing');
            await this.refreshData();
        } else {
            this.data = outcome;
            log(`has cached data ${this.data.length} items`);
        }
        return this;
    }

    /**
     * Get a country by code
     * @param {string} code - The code of the country as cca2 or cca3
     * @returns {CountryData | null} The country data or null if not found
     * @memberof CountryLib
     */
    getByCode(code: string) : CountryData | null {
        return this.data.find((item: CountryData) => item.data.cca2 === code.toUpperCase() || item.data.cca3 === code.toUpperCase()) ?? null;
    }

    /**
     * Get a country by common or official name
     * @param {string} name - The name of the country as common or official
     * @returns {CountryData | null} The country data or null if not found
     * @memberof CountryLib
     */
    getByName(name: string) : CountryData | null {
        return this.data.find((item: CountryData) => item.data.name.common.toLowerCase() === name.toLowerCase() || item.data.name.official.toLowerCase() === name.toLowerCase()) ?? null;
    }

    /**
     * Check if the CountryLib data is cached
     *
     * @return {*}  {Promise<CountryData[] | null>}
     * @memberof CountryLib
     */
    async hasCachedData(): Promise<CountryData[] | null> {
        log('hasCachedData');
        const rawData = await this._config.cacheManager.get(CACHE_KEY);
        if (rawData === null) return null;
        const ret: CountryData[] = [];
        for (let country of rawData as any[]) {
            ret.push(CountryData.fromMledoze(country));
        }
        log(`hasCachedData ${Object.keys(ret).length} items`);
        return ret;
    }

    /**
     * Refresh the data from the online source and cache it
     * Does not throw, not to interrupt the program
     * @return {*}  {Promise<boolean>}
     * @memberof CountryLib
     */
    async refreshData(): Promise<boolean> {
        // process mledoze data
        const ret: CountryData[] = [];
        const rawData = await downloadJson(this._config.sources.mledoze, 'mledoze');
        for (let country of rawData as any[]) {
            ret.push(CountryData.fromMledoze(country));
        }
        // save to cache
        await this._config.cacheManager.set(CACHE_KEY, rawData);
        this.data = ret;
        return true
    }
}