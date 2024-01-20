"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
// Example 1: Convert UTC time to a user's local timezone
const utcTime = "2024-01-20T12:00:00Z"; // A time in UTC
const userTimezone = "Europe/Istanbul"; // User's timezone
const localTime = (0, index_1.convertToUserTimezone)(utcTime, userTimezone);
console.log("Local Time:", localTime);
// Example 2: Format time in a specific format
const formattedTime = (0, index_1.formatTime)(utcTime, userTimezone, "YYYY-MM-DD HH:mm");
console.log("Formatted Time:", formattedTime);
// Example 3: Format the current date in a specific format
const currentDate = new Date();
const customFormat = "YYYY-MM-DD";
const formattedDate = (0, index_1.formatDate)(currentDate, customFormat);
console.log("Formatted Date:", formattedDate);
// Example 4: Return the current date in ISO 8601 format
const isoString = (0, index_1.toISOString)(currentDate);
console.log("ISO String:", isoString);
// Example 5: Return the current date and time in a human-readable format
const readableNow = (0, index_1.nowFormatted)();
console.log("Readable Now:", readableNow);
