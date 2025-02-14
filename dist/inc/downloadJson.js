"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadJson = downloadJson;
const config_1 = require("../config");
async function downloadJson(url, cacheKey) {
    const cachedData = await config_1.config.cacheManager.get(cacheKey);
    if (cachedData)
        return cachedData;
    const response = await fetch(url);
    const data = await response.json();
    await config_1.config.cacheManager.set(cacheKey, data);
    return data;
}
//# sourceMappingURL=downloadJson.js.map