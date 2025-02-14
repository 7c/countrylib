import { WorldCurrency } from "./WorldCurrency";
import { WorldLanguage } from "./WorldLanguage";
import { WorldContinent } from "./WorldContinent";
export type tCountryData = {
    name: {
        common: string;
        official: string;
    };
    tld: string[];
    cca2: string;
    cca3: string;
    ccn3: number;
    cioc: string;
    independent: boolean;
    currencies: WorldCurrency[];
    continent: WorldContinent;
    capital: string[];
    status: string;
    languages: WorldLanguage[];
    lat: number;
    lng: number;
    flag: string;
    area: number;
};
//# sourceMappingURL=types.d.ts.map