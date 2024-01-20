import {
  convertToUserTimezone,
  formatTime,
  formatDate,
  toISOString,
  nowFormatted,
  calculateDuration,
} from "../index";

// Example 1: Convert UTC time to a user's local timezone
const utcTime = "2024-01-20T12:00:00Z"; // A time in UTC
const userTimezone = "Europe/Istanbul"; // User's timezone
const localTime = convertToUserTimezone(utcTime, userTimezone);
console.log("Local Time:", localTime);

// Example 2: Format time in a specific format
const formattedTime = formatTime(utcTime, userTimezone, "YYYY-MM-DD HH:mm");
console.log("Formatted Time:", formattedTime);

// Example 3: Format the current date in a specific format
const currentDate = new Date();
const customFormat = "YYYY-MM-DD";
const formattedDate = formatDate(currentDate, customFormat);
console.log("Formatted Date:", formattedDate);

// Example 4: Return the current date in ISO 8601 format
const isoString = toISOString(currentDate);
console.log("ISO String:", isoString);

// Example 5: Return the current date and time in a human-readable format
const readableNow = nowFormatted();
console.log("Readable Now:", readableNow);

// Example 6: Calculate the duration between two dates
const startDate = new Date();
const endDate = "2024-01-23T15:00:00Z";
const duration = calculateDuration(startDate, endDate);
console.log("Duration:", duration);
