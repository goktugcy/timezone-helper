import moment from 'moment';
/**
 * Formats a date according to a specific date and time format.
 * @param date Date object to format.
 * @param format Desired format (e.g., 'YYYY-MM-DD', 'HH:mm:ss').
 * @return Formatted date and time string.
 */
export function formatDate(date: Date, format: string): string {
    // Formatting using moment.js or another date library
    // This example assumes the use of moment.js
    return moment(date).format(format);
}

/**
 * Returns a date and time in ISO 8601 format.
 * @param date Date object to convert.
 * @return Date and time in ISO 8601 format.
 */
export function toISOString(date: Date): string {
    return date.toISOString();
}

/**
 * Returns the current date and time in a human-readable format.
 * @return Human-readable date and time (e.g., '2024-01-20 10:00:00').
 */
export function nowFormatted(): string {
    return new Date().toLocaleString();
}
