import { WorldCurrency } from "./WorldCurrency";
import { WorldLanguage } from "./WorldLanguage";
import { WorldContinent } from "./WorldContinent";

export type tCountryData = {
    name: {
        common: string;
        official: string;

    };
    tld: string[];
    cca2: string; // ISO 3166-1 alpha-2
    cca3: string; // ISO 3166-1 alpha-3
    ccn3: number; // ISO 3166-1 numeric
    cioc: string; // IOC code
    independent: boolean;
    currencies: WorldCurrency[];
    continent: WorldContinent;
    capital: string[];
    status: string;
    languages: WorldLanguage[];
    lat: number;
    lng: number;
    flag: string; // unicode flag
    area: number;
}