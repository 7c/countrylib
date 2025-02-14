"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryData = void 0;
const WorldContinent_1 = require("./WorldContinent");
const WorldLanguage_1 = require("./WorldLanguage");
const WorldCurrency_1 = require("./WorldCurrency");
class CountryData {
    constructor() {
        this.data = {};
    }
    static fromMledoze(data) {
        const c = new CountryData();
        c.data = {
            name: {
                common: data.name.common,
                official: data.name.official,
            },
            tld: data.tld.map((item) => item.toLowerCase()),
            cca2: data.cca2.toUpperCase(),
            ccn3: parseInt(data.ccn3),
            cca3: data.cca3.toUpperCase(),
            cioc: data.cioc.toUpperCase(),
            independent: data.independent,
            currencies: Object.entries(data.currencies).map(([key, value]) => new WorldCurrency_1.WorldCurrency(key, value.symbol)),
            continent: new WorldContinent_1.WorldContinent(data.continent, data.subregion),
            capital: data.capital,
            status: data.status,
            //{ nld: 'Dutch', pap: 'Papiamento' }
            languages: Object.entries(data.languages).map(([key, value]) => new WorldLanguage_1.WorldLanguage(key, value)),
            lat: data.latlng[0],
            lng: data.latlng[1],
            flag: data.flag,
            area: data.area,
        };
        return c;
    }
}
exports.CountryData = CountryData;
//# sourceMappingURL=CountryData.js.map