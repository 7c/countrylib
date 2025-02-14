import { WorldRegion } from "./WorldRegion";
import { WorldLanguage } from "./WorldLanguage";
import { WorldCurrency } from "./WorldCurrency";
import { tCountryData } from "./types";

export class CountryData {
    public data : tCountryData = {} as tCountryData;
    constructor() {
    }

   
    static fromMledoze(data: any) : CountryData {
        const c = new CountryData();
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
            region: new WorldRegion(data.region, data.subregion),
            capital: data.capital,
            status: data.status,
            //{ nld: 'Dutch', pap: 'Papiamento' }
            languages: Object.entries(data.languages).map(([key, value]) => new WorldLanguage(key, value as string)),
            lat: data.latlng[0],
            lng: data.latlng[1],
            flag: data.flag,
            area: data.area,
        }
        return c;
    }
}
