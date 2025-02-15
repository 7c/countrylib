require('module-alias/register');
import { CountryLib } from "../models/CountryLib";

async function main() {
    const countryLib = new CountryLib();
    await countryLib.loadData();
    const US = countryLib.getByCode('US');
    const SY = countryLib.getByName('Syria');
    console.dir(US, { depth: null });
    console.dir(SY, { depth: null });
}

main()