import moment from "moment-timezone";

type DateLike = string | number | Date;
/**
 * Converts a given timestamp (in UTC or another timezone) to the user's local timezone.
 * @param timestamp The timestamp in UTC or another timezone.
 * @param timezone The user's local timezone.
 * @return The time converted to the user's timezone.
 */
export function convertToUserTimezone(timestamp: string, timezone: string) {
  return moment(timestamp).tz(timezone).format();
}

/**
 * Returns the time converted to the user's local timezone in a specific format.
 * @param timestamp The timestamp in UTC or another timezone.
 * @param timezone The user's local timezone.
 * @param format The format for the conversion.
 * @return The formatted time.
 */
export function formatTime(
  timestamp: string,
  timezone: string,
  format: string
): string {
  return moment(timestamp).tz(timezone).format(format);
}

/**
 * Returns the date converted to a specific format.
 * @param date The date to format.
 * @param format The format for the conversion.
 * @return The formatted date.
 */
export function calculateDuration(startDate: DateLike, endDate: DateLike) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const duration = end.getTime() - start.getTime();

  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / 1000 / 60) % 60);
  const hours = Math.floor((duration / 1000 / 60 / 60) % 24);
  const days = Math.floor(duration / 1000 / 60 / 60 / 24);

  return { days, hours, minutes, seconds };
}
