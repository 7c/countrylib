import { tTranslations } from "./types";
type tContinent = {
    code: string;
    name: string;
    alt_names: string[];
    translations: tTranslations;
};
export declare class WorldContinent {
    code: string;
    name: string;
    translations: tTranslations;
    constructor(code: string);
    static byCode(code: string): tContinent | undefined;
    static byName(name: string): tContinent | undefined;
}
export {};
//# sourceMappingURL=WorldContinent.d.ts.map