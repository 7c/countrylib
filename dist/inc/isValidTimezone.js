"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidTimezone = isValidTimezone;
function isValidTimezone(tz) {
    try {
        new Intl.DateTimeFormat(undefined, { timeZone: tz });
        return true;
    }
    catch (e) {
        return false;
    }
}
//# sourceMappingURL=isValidTimezone.js.map