# Timezone Helper

Timezone Helper is a JavaScript library designed to simplify working with dates and times across different time zones. It provides easy-to-use functions for converting and formatting dates and times based on the user's local time zone. This library is useful for any JavaScript application that needs to handle date and time data in a user-friendly manner, whether it's a Node.js backend or a frontend application.

## Features

- **Timezone Conversion**: Convert timestamps from UTC or any other timezone to the user's local timezone.
- **Flexible Time Formatting**: Format dates and times in various formats suitable for display.
- **User-Friendly Date and Time Display**: Easily display dates and times in a human-readable format.
- **ISO 8601 Compatibility**: Convert dates and times to ISO 8601 format, useful for APIs and data exchange.
- **Current Time Convenience Functions**: Quickly access and format the current date and time.
- **Duration Calculation Feature**: This feature allows you to calculate the duration between two dates, providing the difference in days, hours, minutes, and seconds. It's especially useful for tracking time intervals or scheduling events.

## Installation

Install Timezone Helper using npm:

```bash
npm i @goktugcy/timezone-helper
```

## Usage

Here's how you can use Timezone Helper in your project:

- **Convert to Local Timezone**

```javascript
const { convertToUserTimezone } = require("@goktugcy/timezone-helper");

const localTime = convertToUserTimezone(
  "2024-01-20T12:00:00Z",
  "Europe/Istanbul"
);
console.log("Local Time:", localTime);
```

- **Format Time**

```javascript
const { formatTime } = require("@goktugcy/timezone-helper");

const formattedTime = formatTime(
  "2024-01-20T12:00:00Z",
  "Europe/Istanbul",
  "YYYY-MM-DD HH:mm"
);
console.log("Formatted Time:", formattedTime);
```

- **Format Current Date**

```javascript
const { formatDate } = require("@goktugcy/timezone-helper");

const currentDate = new Date();
const formattedDate = formatDate(currentDate, "YYYY-MM-DD");
console.log("Formatted Date:", formattedDate);
```

- **Duration Calculation**

```javascript
const { calculateDuration } = require("@goktugcy/timezone-helper");

// Calculate the duration between two dates
const startDate = "2024-01-01T00:00:00Z"; // Example start date
const endDate = "2024-01-02T12:30:00Z"; // Example end date

// Use the calculateDuration function to calculate the duration
const duration = calculateDuration(startDate, endDate);

// Print the calculated duration
console.log(
  `Duration: ${duration.days} days, ${duration.hours} hours, ${duration.minutes} minutes, ${duration.seconds} seconds.`
);
```

## Note

This package is a minimal package built on momentjs. It will continue to be updated according to needs.
