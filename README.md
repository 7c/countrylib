# CountryLib Documentation

## Overview
`CountryLib` provides configuration management with a built-in caching layer. It uses the [`cache-manager`](https://www.npmjs.com/package/cache-manager) package along with the [`cache-manager-fs-hash`](https://www.npmjs.com/package/cache-manager-fs-hash) disk store to handle caching on the filesystem.

## Installation

Install the package via npm or yarn:

```sh
npm install --save countrylib
```

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
    continent: WorldContinent { name: 'Americas', code: 'North America' },
    capital: [ 'Washington D.C.' ],
    status: 'officially-assigned',
    languages: [ WorldLanguage { name: 'eng', code: 'English' } ],
    lat: 38,
    lng: -97,
    flag: '🇺🇸',
    area: 9372610
  }
}
```