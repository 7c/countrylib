"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryLib = void 0;
const debug_1 = __importDefault(require("debug"));
const CountryData_1 = require("./CountryData");
const downloadJson_1 = require("../inc/downloadJson");
const config_1 = require("../config");
const log = (0, debug_1.default)('_countrylib');
const CACHE_KEY = 'countrylib';
class CountryLib {
    constructor(_config = config_1.config) {
        this._config = _config;
        this.data = [];
        log('constructor', _config);
    }
    async loadData() {
        const outcome = await this.hasCachedData();
        if (!outcome) {
            log('no cached data, refreshing');
            await this.refreshData();
        }
        else {
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
    getByCode(code) {
        var _a;
        return (_a = this.data.find((item) => item.data.cca2 === code.toUpperCase() || item.data.cca3 === code.toUpperCase())) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Get a country by common or official name
     * @param {string} name - The name of the country as common or official
     * @returns {CountryData | null} The country data or null if not found
     * @memberof CountryLib
     */
    getByName(name) {
        var _a;
        return (_a = this.data.find((item) => item.data.name.common.toLowerCase() === name.toLowerCase() || item.data.name.official.toLowerCase() === name.toLowerCase())) !== null && _a !== void 0 ? _a : null;
    }
    /**
     * Check if the CountryLib data is cached
     *
     * @return {*}  {Promise<CountryData[] | null>}
     * @memberof CountryLib
     */
    async hasCachedData() {
        log('hasCachedData');
        const rawData = await this._config.cacheManager.get(CACHE_KEY);
        if (rawData === null)
            return null;
        const ret = [];
        for (let country of rawData) {
            ret.push(CountryData_1.CountryData.fromMledoze(country));
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
    async refreshData() {
        // process mledoze data
        const ret = [];
        const rawData = await (0, downloadJson_1.downloadJson)(this._config.sources.mledoze, 'mledoze');
        for (let country of rawData) {
            ret.push(CountryData_1.CountryData.fromMledoze(country));
        }
        // save to cache
        await this._config.cacheManager.set(CACHE_KEY, rawData);
        this.data = ret;
        return true;
    }
}
exports.CountryLib = CountryLib;
//# sourceMappingURL=CountryLib.js.map