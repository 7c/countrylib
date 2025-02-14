"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
const CountryLib_1 = require("../models/CountryLib");
async function main() {
    const countryLib = new CountryLib_1.CountryLib();
    await countryLib.loadData();
    const US = countryLib.getByCode('US');
    // console.dir(countryLib.data, { depth: null });
    console.dir(US, { depth: null });
}
main();
//# sourceMappingURL=basic.js.map