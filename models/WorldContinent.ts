import { tTranslations } from "./types";

type tContinent = {
    code: string;
    name: string;
    alt_names:string[];
    translations: tTranslations;
}

type tContinents = {
    [key: string]: tContinent;
}

const continentsByCode   : tContinents = {
    AF: {
        code: 'AF',
        name: 'Africa',
        alt_names:[],
        translations: {
            en: 'Africa',
            de: 'Afrika',
            es: 'África',
            fr: 'Afrique',
            ja: "アフリカ",
            zh: "非洲",
            ru: "Африка",
            tr: 'Afrika',
            vi: "Châu Phi",
            ar: "أفريقا",
            nl: "Afrika",
            pl: "Afryka",
            pt: "África",
            ro: "Africa",
            it: 'Africa',
        }
    },
    AN: {
        code: 'AN',
        name: 'Antarctica',
        alt_names:['Antarctic'],
        translations: {
            en: 'Antarctica',
            de: 'Antarktis',
            es: 'Antártida',
            fr: 'Antarctique',
            ja: "南極",
            zh: "南极洲",
            ru: "Антарктида",
            tr: 'Antarktika',
            vi: "Nam Cực",
            ar: "أنتاركتيكا",
            nl: "Antarctica",
            pl: "Antarktyka",
            pt: "Antártida",
            ro: "Antarctica",
            it: 'Antartide',
        }
    },
    AS: {
        code: 'AS',
        name: 'Asia',
        alt_names:[],
        translations: {
            en: 'Asia',
            de: 'Asien',
            es: 'Asia',
            fr: 'Asie',
            ja: "アジア",
            zh: "亚洲",
            ru: "Азия",
            tr: 'Asya',
            vi: "Châu Á",
            ar: "آسيا",
            nl: "Azië",
            pl: "Azja",
            pt: "Ásia",
            ro: "Asia",
            it: 'Asia',
        }
    },
    EU: {
        code: 'EU',
        name: 'Europe',
        alt_names:[],
        translations: {
            en: 'Europe',
            de: 'Europa',
            es: 'Europa',
            fr: 'Europe',
            ja: "ヨーロッパ",
            zh: "欧洲", 
            ru: "Европа",
            tr: 'Avrupa',
            vi: "Châu Âu",
            ar: "أوروبا",
            nl: "Europa",
            pl: "Europa",
            pt: "Europa",
            ro: "Europa",
            it: 'Europa',
        }
    },
    NA: {
        code: 'NA',
        name: 'North America',
        alt_names:[],
        translations: {
            en: 'North America',
            de: 'Nordamerika',
            es: 'América del Norte',
            fr: 'Amérique du Nord',
            ja: "北アメリカ",
            zh: "北美洲",
            ru: "Северная Америка",
            tr: 'Kuzey Amerika',
            vi: "Bắc Mỹ",
            ar: "أمريكا الشمالية",
            nl: "Noord-Amerika",
            pl: "Ameryka Północna",
            pt: "América do Norte",
            ro: "America de Nord",
            it: 'America del Nord',
        }
    },
    OC: {
        code: 'OC',
        name: 'Oceania',
        alt_names:['Australia'],
        translations: {
            en: 'Oceania',
            de: 'Ozeanien',
            es: 'Oceanía',
            fr: 'Océanie',
            ja: "オセアニア",
            zh: "大洋洲",
            ru: "Океания",
            tr: 'Okyanusya',
            vi: "Thái Bình Dương",
            ar: "أوقيانوسيا",
            nl: "Oceanië",
            pl: "Oceania",
            pt: "Oceânia",
            ro: "Oceania",
            it: 'Oceania',
        }
    },
    SA: {
        code: 'SA',
        name: 'South America',
        alt_names:[],
        translations: {
            en: 'South America',
            de: 'Südamerika',
            es: 'Sudamérica',
            fr: 'Amérique du Sud',
            ja: "南アメリカ",
            zh: "南美洲",
            ru: "Южная Америка",
            tr: 'Güney Amerika',
            vi: "Nam Mỹ",
            ar: "أمريكا الجنوبية",
            nl: "Zuid-Amerika",
            pl: "Ameryka Południowa",
            pt: "América do Sul",
            ro: "America de Sud",
            it: 'America del Sud',
        }
    }
}

export class WorldContinent {
    public name: string;
    public translations: tTranslations;
    constructor(public code: string) {
        const continent = WorldContinent.byCode(code) || WorldContinent.byName(code)
        if (!continent) {
            throw new Error(`Unknown continent code: ${code}`)
        }
        this.code = continent.code
        this.name = continent.name
        this.translations = continent.translations
    }

    static byCode(code: string) : tContinent | undefined {
        return continentsByCode[code.toUpperCase()]
    }

    static byName(name: string) : tContinent | undefined {
        const byMainname = Object.values(continentsByCode).find(c => c.name.toLowerCase() === name.toLowerCase())   
        if (byMainname) return byMainname
        
        const byAltNames = Object.values(continentsByCode).find(c => c.alt_names.some(altName => altName.toLowerCase() === name.toLowerCase()))
        if (byAltNames) return byAltNames
        
        return undefined
    }
}