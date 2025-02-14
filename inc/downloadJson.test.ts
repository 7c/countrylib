import path from 'path';
import { config } from '../config';
import { downloadJson } from './downloadJson';
import fs from 'fs';

describe('downloadJson', () => {
    it('should download the json file and cache it', async () => {
        let cacheFile = path.join(config.cacheFolder, 'diskstore-fb8/2ccafa3946216473fc48b049660c9.json');
        if (fs.existsSync(cacheFile)) fs.unlinkSync(cacheFile);
        expect(fs.existsSync(cacheFile)).toBe(false);
        const data = await downloadJson('https://restcountries.com/v3.1/all', 'countriestest');
        expect(data).toBeDefined();
        expect(data.length).toBeGreaterThan(0);
        expect(fs.existsSync(cacheFile)).toBe(true);
    });
});
