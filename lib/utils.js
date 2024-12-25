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
    // return `<iframe width="100%" src="https://www.youtube.com/embed/${extract}" frameBorder="0" allow="accelerometer" autoPlay />`;
  } else {
    return "";
  }
}
