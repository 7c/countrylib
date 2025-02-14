import { CountryData } from "./CountryData";
import { Configuration } from "../config";
export declare class CountryLib {
    private _config;
    data: CountryData[];
    constructor(_config?: Configuration);
    loadData(): Promise<this>;
    /**
     * Get a country by code
     * @param {string} code - The code of the country as cca2 or cca3
     * @returns {CountryData | null} The country data or null if not found
     * @memberof CountryLib
     */
    getByCode(code: string): CountryData | null;
    /**
     * Get a country by common or official name
     * @param {string} name - The name of the country as common or official
     * @returns {CountryData | null} The country data or null if not found
     * @memberof CountryLib
     */
    getByName(name: string): CountryData | null;
    /**
     * Check if the CountryLib data is cached
     *
     * @return {*}  {Promise<CountryData[] | null>}
     * @memberof CountryLib
     */
    hasCachedData(): Promise<CountryData[] | null>;
    /**
     * Refresh the data from the online source and cache it
     * Does not throw, not to interrupt the program
     * @return {*}  {Promise<boolean>}
     * @memberof CountryLib
     */
    refreshData(): Promise<boolean>;
}
//# sourceMappingURL=CountryLib.d.ts.map