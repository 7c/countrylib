import { config } from "../config";

export async function downloadJson(url: string, cacheKey: string) {
    const cachedData = await config.cacheManager.get(cacheKey);
    if (cachedData) return cachedData;

    const response = await fetch(url);
    const data = await response.json();
    await config.cacheManager.set(cacheKey, data);
    return data;
}