# CountryLib Documentation

## Overview
`CountryLib` provides configuration management with a built-in caching layer. It uses the [`cache-manager`](https://www.npmjs.com/package/cache-manager) package along with the [`cache-manager-fs-hash`](https://www.npmjs.com/package/cache-manager-fs-hash) disk store to handle caching on the filesystem.

## Installation

Install the package via npm or yarn:

```sh
npm install --save countrylib
```

## Sources
- https://github.com/khkwan0/countryCityStateJson
- https://github.com/mledoze/countries
- https://github.com/harpreetkhalsagtbit/country-state-city

## File Details

### CountryLib Class

The `CountryLib` class provides an interface to manage and retrieve country data. **It can asynchronously load country data from the cache or refresh it from an online source.**

**Constructor Behavior:**
 - The constructor accepts an optional configuration object and does not automatically load data. Instead, you must call the `loadData()` method to initialize the data (which will check the cache and refresh if needed).

**Methods:**
 - `getByCode(code: string): CountryData | null`  
   Retrieves country data matching the given two-letter (cca2) or three-letter (cca3) country code.

 - `getByName(name: string): CountryData | null`  
   Retrieves country data for a country matching the given common or official name.

 - `hasCachedData(): Promise<CountryData[] | null>`  
   Checks whether country data is cached and returns the cached data if available.

 - `refreshData(): Promise<boolean>`  
   Fetches the latest country data from an online source, processes it using `CountryData.fromMledoze`, caches it, and updates the internal data array.

**Example Usage:**

```typescript
import { CountryLib } from 'countrylib';

async function testCountryLib() {
  // Instantiate the class (optionally pass a custom configuration)
  const countryLib = new CountryLib();
  // Load and initialize country data (from cache or online)
  await countryLib.loadData();

  const countryUS = countryLib.getByCode('US');
  if (countryUS) {
    console.log('Found country by code (US):', countryUS);
  } else {
    console.log('Country with code "US" not found.');
  }

  const countryCanada = countryLib.getByName('Canada');
  if (countryCanada) {
    console.log('Found country by name:', countryCanada);
  } else {
    console.log('Country with name "Canada" not found.');
  }
}

testCountryLib();
```

## CountryData Class
### Example Data
```json
CountryData {
  data: {
    name: { common: 'United States', official: 'United States of America' },
    tld: [ '.us' ],
    cca2: 'US',
    ccn3: 840,
    cca3: 'USA',
    cioc: 'USA',
    independent: true,
    currencies: [ WorldCurrency { code: 'USD', symbol: '$' } ],
    continent: WorldContinent {
      code: 'NA',
      name: 'North America',
      translations: {
        en: 'North America',
        de: 'Nordamerika',
        es: 'América del Norte',
        fr: 'Amérique du Nord',
        ja: '北アメリカ',
        zh: '北美洲',
        ru: 'Северная Америка',
        tr: 'Kuzey Amerika',
        vi: 'Bắc Mỹ',
        ar: 'أمريكا الشمالية',
        nl: 'Noord-Amerika',
        pl: 'Ameryka Północna',
        pt: 'América do Norte',
        ro: 'America de Nord',
        it: 'America del Nord'
      }
    },
    capital: [ 'Washington D.C.' ],
    status: 'officially-assigned',
    languages: [ WorldLanguage { name: 'eng', code: 'English' } ],
    lat: 38,
    lng: -97,
    flag: '🇺🇸',
    area: 9372610,
    timezones: [
      'America/Chicago',
      'America/Los_Angeles',
      'America/New_York',
      'America/Phoenix',
      'America/Boise',
      'America/Kentucky/Louisville',
      'America/Indiana/Indianapolis',
      'America/Denver',
      'America/Detroit',
      'Pacific/Honolulu',
      'America/Menominee',
      'America/Indiana/Vevay',
      'America/Indiana/Vincennes',
      'America/Anchorage',
      'America/North_Dakota/New_Salem',
      'America/Indiana/Tell_City',
      'America/Indiana/Knox',
      'America/Indiana/Winamac',
      'America/Indiana/Marengo',
      'America/Sitka',
      'America/Juneau',
      'America/Kentucky/Monticello',
      'America/Indiana/Petersburg',
      'America/North_Dakota/Beulah',
      'America/Nome',
      'America/Metlakatla',
      'America/North_Dakota/Center'
    ],
    coordinates: [
      { latitude: 37.751, longitude: -97.822 },
      { latitude: 41.8835, longitude: -87.6305 },
      { latitude: 42.5584, longitude: -71.269 },
      { latitude: 47.6109, longitude: -122.3303 },
      { latitude: 33.42, longitude: -111.9128 },
      { latitude: 39.0469, longitude: -77.4903 },
      { latitude: 40.7126, longitude: -74.0066 },
      { latitude: 37.3388, longitude: -121.8916 },
      { latitude: 34.0544, longitude: -118.244 },
      { latitude: 31.5718, longitude: -85.2505 },
      { latitude: 29.1779, longitude: -95.446 },
      { latitude: 30.5183, longitude: -82.9482 },
      { latitude: 27.7889, longitude: -82.7192 },
      { latitude: 21.3195, longitude: -157.8525 },
      { latitude: 48.799, longitude: -122.4499 },
      { latitude: 26.9372, longitude: -82.2386 },
      { latitude: 21.9036, longitude: -159.4666 },
      { latitude: 64.7511, longitude: -147.3494 },
      { latitude: 61.1901, longitude: -149.9361 },
      { latitude: 25.4785, longitude: -80.4844 },
      { latitude: 61.5883, longitude: -149.3959 },
      { latitude: 64.0382, longitude: -145.7508 },
      { latitude: 66.9007, longitude: -162.6058 },
      { latitude: 59.0397, longitude: -158.4575 },
      { latitude: 53.8865, longitude: -166.5387 },
      { latitude: 63.3403, longitude: -142.9853 },
      { latitude: 68.1297, longitude: -145.5334 }
    ]
  }
}
```