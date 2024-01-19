"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nowFormatted = exports.toISOString = exports.formatDate = void 0;
const moment_1 = __importDefault(require("moment"));
/**
 * Formats a date according to a specific date and time format.
 * @param date Date object to format.
 * @param format Desired format (e.g., 'YYYY-MM-DD', 'HH:mm:ss').
 * @return Formatted date and time string.
 */
function formatDate(date, format) {
    // Formatting using moment.js or another date library
    // This example assumes the use of moment.js
    return (0, moment_1.default)(date).format(format);
}
exports.formatDate = formatDate;
/**
 * Returns a date and time in ISO 8601 format.
 * @param date Date object to convert.
 * @return Date and time in ISO 8601 format.
 */
function toISOString(date) {
    return date.toISOString();
}
exports.toISOString = toISOString;
/**
 * Returns the current date and time in a human-readable format.
 * @return Human-readable date and time (e.g., '2024-01-20 10:00:00').
 */
function nowFormatted() {
    return new Date().toLocaleString();
}
exports.nowFormatted = nowFormatted;
