import moment from 'moment-timezone';

/**
 * Converts a given timestamp (in UTC or another timezone) to the user's local timezone.
 * @param timestamp The timestamp in UTC or another timezone.
 * @param timezone The user's local timezone.
 * @return The time converted to the user's timezone.
 */
export function convertToUserTimezone(timestamp: string, timezone: string): string {
    return moment(timestamp).tz(timezone).format();
}

/**
 * Returns the time converted to the user's local timezone in a specific format.
 * @param timestamp The timestamp in UTC or another timezone.
 * @param timezone The user's local timezone.
 * @param format The format for the conversion.
 * @return The formatted time.
 */
export function formatTime(timestamp: string, timezone: string, format: string): string {
    return moment(timestamp).tz(timezone).format(format);
}