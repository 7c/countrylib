import { CountryLib } from './CountryLib';
import { CountryData } from './CountryData';

describe('CountryLib', () => {
    it('should be instantiable with default config', () => {
        const countryLib = new CountryLib();
        expect(countryLib).toBeDefined();
    });

    it('should be able to load data', async () => {
        const countryLib = new CountryLib();
        await countryLib.loadData();
        expect(countryLib.data.length).toBeGreaterThan(0);
    })

    it('should be able to get a 2 letter country by code', async () => {
        const countryLib = new CountryLib();
        await countryLib.loadData();
        expect(countryLib.getByCode('US')?.data.cca2).toBe('US');
        expect(countryLib.getByCode('us')?.data.cca2).toBe('US');
    })

    it('should be able to get a 3 letter country by code', async () => {
        const countryLib = new CountryLib();
        await countryLib.loadData();
        expect(countryLib.getByCode('USA')?.data.cca3).toBe('USA');
        expect(countryLib.getByCode('USA')?.data.cca2).toBe('US');
        expect(countryLib.getByCode('UsA')?.data.cca2).toBe('US');
    })

    it('should be able to get a country by name', async () => {
        const countryLib = new CountryLib();
        await countryLib.loadData();
        expect(countryLib.getByName('United States')?.data.cca2).toBe('US');
        expect(countryLib.getByName('united states')?.data.cca2).toBe('US');
        expect(countryLib.getByName('United States')?.data.cca3).toBe('USA');
        expect(countryLib.getByName('United States')?.data.name.common).toBe('United States');
        expect(countryLib.getByName('United States')?.data.name.official).toBe('United States of America');
    })
    
})