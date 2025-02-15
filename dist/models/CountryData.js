"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryData = void 0;
const debug_1 = __importDefault(require("debug"));
const WorldContinent_1 = require("./WorldContinent");
const WorldLanguage_1 = require("./WorldLanguage");
const WorldCurrency_1 = require("./WorldCurrency");
const input1_json_1 = __importDefault(require("../data/input1.json"));
const log = (0, debug_1.default)('_CountryData');
class CountryData {
    constructor() {
        this.data = {};
    }
    static fromMledoze(data) {
        const c = new CountryData();
        if (['united states', 'canada', 'mexico'].includes(data.name.common.toLowerCase()))
            data.region = 'North America';
        else if (data.region === 'Americas')
            data.region = 'South America';
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
            continent: data.region ? new WorldContinent_1.WorldContinent(data.region) : undefined,
            capital: data.capital,
            status: data.status,
            languages: Object.entries(data.languages).map(([key, value]) => new WorldLanguage_1.WorldLanguage(key, value)),
            lat: data.latlng[0],
            lng: data.latlng[1],
            flag: data.flag,
            area: data.area,
            timezones: input1_json_1.default.countries[data.cca2.toUpperCase()].timezones,
            coordinates: input1_json_1.default.countries[data.cca2.toUpperCase()].coordinates,
        };
        return c;
    }
}
exports.CountryData = CountryData;
//# sourceMappingURL=CountryData.js.map