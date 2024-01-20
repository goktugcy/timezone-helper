# Timezone Helper

Timezone Helper is a JavaScript library designed to simplify working with dates and times across different time zones. It provides easy-to-use functions for converting and formatting dates and times based on the user's local time zone. This library is useful for any JavaScript application that needs to handle date and time data in a user-friendly manner, whether it's a Node.js backend or a frontend application.

## Features

- **Timezone Conversion**: Convert timestamps from UTC or any other timezone to the user's local timezone.
- **Flexible Time Formatting**: Format dates and times in various formats suitable for display.
- **User-Friendly Date and Time Display**: Easily display dates and times in a human-readable format.
- **ISO 8601 Compatibility**: Convert dates and times to ISO 8601 format, useful for APIs and data exchange.
- **Current Time Convenience Functions**: Quickly access and format the current date and time.

## Installation

Install Timezone Helper using npm:

```bash
npm install timezone-helper
```

## Usage

Here's how you can use Timezone Helper in your project:

- **Convert to Local Timezone**

```javascript
const {
  convertToUserTimezone,
} = require("timezone-helper");

const localTime = convertToUserTimezone(
  "2024-01-20T12:00:00Z",
  "Europe/Istanbul"
);
console.log("Local Time:", localTime);
```

- **Format Time**

```javascript
const { formatTime } = require("timezone-helper");

const formattedTime = formatTime(
  "2024-01-20T12:00:00Z",
  "Europe/Istanbul",
  "YYYY-MM-DD HH:mm"
);
console.log("Formatted Time:", formattedTime);
```

- **Format Current Date**

```javascript
const { formatDate } = require("timezone-helper");

const currentDate = new Date();
const formattedDate = formatDate(currentDate, "YYYY-MM-DD");
console.log("Formatted Date:", formattedDate);
```
