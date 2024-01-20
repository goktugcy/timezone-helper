"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDuration = exports.formatTime = exports.convertToUserTimezone = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
/**
 * Converts a given timestamp (in UTC or another timezone) to the user's local timezone.
 * @param timestamp The timestamp in UTC or another timezone.
 * @param timezone The user's local timezone.
 * @return The time converted to the user's timezone.
 */
function convertToUserTimezone(timestamp, timezone) {
    return (0, moment_timezone_1.default)(timestamp).tz(timezone).format();
}
exports.convertToUserTimezone = convertToUserTimezone;
/**
 * Returns the time converted to the user's local timezone in a specific format.
 * @param timestamp The timestamp in UTC or another timezone.
 * @param timezone The user's local timezone.
 * @param format The format for the conversion.
 * @return The formatted time.
 */
function formatTime(timestamp, timezone, format) {
    return (0, moment_timezone_1.default)(timestamp).tz(timezone).format(format);
}
exports.formatTime = formatTime;
function calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const duration = end.getTime() - start.getTime();
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / 1000 / 60) % 60);
    const hours = Math.floor((duration / 1000 / 60 / 60) % 24);
    const days = Math.floor(duration / 1000 / 60 / 60 / 24);
    return { days, hours, minutes, seconds };
}
exports.calculateDuration = calculateDuration;
