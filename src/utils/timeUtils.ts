import moment from "moment-timezone";

export function getLocalHour(date: string): number {
  return new Date(date).getHours();
}

export function getUTCOffset(timezone: string): number {
  return moment.tz(timezone).utcOffset() / 60;
}
