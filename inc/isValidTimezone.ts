

export function isValidTimezone(tz: string) {
    try {
        new Intl.DateTimeFormat(undefined, { timeZone: tz });
        return true;
    } catch (e) {
        return false;
    }
}