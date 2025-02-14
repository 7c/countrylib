require('module-alias/register');
import { CountryLib } from "../models/CountryLib";

async function main() {
    const countryLib = new CountryLib();
    await countryLib.loadData();
    const US = countryLib.getByCode('US');
    // console.dir(countryLib.data, { depth: null });
    console.dir(US, { depth: null });
}


main()