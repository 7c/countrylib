import debug from 'debug'
import { WorldContinent } from "./WorldContinent";
import { WorldLanguage } from "./WorldLanguage";
import { WorldCurrency } from "./WorldCurrency";
import { tCountryData } from "./types";
import input1 from '../data/input1.json'
import chalk from 'chalk';

const log = debug('_CountryData')

export class CountryData {
    public data : tCountryData = {} as tCountryData;
    constructor() {
    }

      
    static fromMledoze(data: any) : CountryData {
        const c = new CountryData();
        if (['united states','canada','mexico'].includes(data.name.common.toLowerCase())) data.region='North America'
            else if (data.region==='Americas') data.region='South America'
        c.data = {
            name: {
                common: data.name.common,
                official: data.name.official,
            },
            tld: data.tld.map((item: string) => item.toLowerCase()),
            cca2: data.cca2.toUpperCase(),
            ccn3: parseInt(data.ccn3),
            cca3: data.cca3.toUpperCase(),
            cioc: data.cioc.toUpperCase(),
            independent: data.independent,
            currencies: Object.entries(data.currencies).map(([key, value]) => new WorldCurrency(key, (value as any).symbol)),
            continent: data.region ? new WorldContinent(data.region) : undefined,
            capital: data.capital,
            status: data.status,
            languages: Object.entries(data.languages).map(([key, value]) => new WorldLanguage(key, value as string)),
            lat: data.latlng[0],
            lng: data.latlng[1],
            flag: data.flag,
            area: data.area,
            timezones: (input1.countries as any)[data.cca2.toUpperCase()].timezones,
            coordinates: (input1.countries as any)[data.cca2.toUpperCase()].coordinates,
        }
        return c;
    }
}
