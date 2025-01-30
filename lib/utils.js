import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function extractYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/)([^\s&?]+)/);

  if (match && match[1]) {
    const extract = match[1];
    return extract;
  } else {
    return "";
  }
}

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbaDataURL = (r, g, b, a) => {
  // Convert alpha to an 8-bit value (0 to 255)
  const alpha = Math.round(a * 255);
  return `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, alpha, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
};

export function percentage(percent, total) {
  return (percent / 100) * total;
}

export function groupEventsByDate(events) {
  if (!events || !events.length) {
    return [];
  }

  const groupedEvents = {};

  // Group events by date
  events.forEach((event) => {
    const { start_date, start_time, end_time } = event;
    if (!groupedEvents[start_date]) {
      groupedEvents[start_date] = [];
    }
    groupedEvents[start_date].push({ start_time, end_time });
  });

  // Convert grouped events into the desired format
  const updatedEvents = Object.keys(groupedEvents).map((date) => ({
    date,
    slots: groupedEvents[date],
  }));

  return updatedEvents;
}
