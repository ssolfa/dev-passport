import { CountryInfo } from "../types";

export const COUNTRY_DATA: Record<string, CountryInfo> = {
  "Asia/Seoul": {
    name: "Korea",
    code: "KR",
    flag: "🇰🇷",
    timezone: "Asia/Seoul",
    greeting: "안녕하세요",
    utcOffset: "UTC+09:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "아침" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "낮" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "저녁" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "밤" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Asia/Tokyo": {
    name: "Japan",
    code: "JP",
    flag: "🇯🇵",
    timezone: "Asia/Tokyo",
    greeting: "こんにちは",
    utcOffset: "UTC+09:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "朝" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "昼" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "夕" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "夜" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Asia/Shanghai": {
    name: "China",
    code: "CN",
    flag: "🇨🇳",
    timezone: "Asia/Shanghai",
    greeting: "你好",
    utcOffset: "UTC+08:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "早上" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "下午" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "晚上" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "夜间" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Asia/Singapore": {
    name: "Singapore",
    code: "SG",
    flag: "🇸🇬",
    timezone: "Asia/Singapore",
    greeting: "Hello",
    utcOffset: "UTC+08:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Morning" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Afternoon" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Evening" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Night" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Asia/Bangkok": {
    name: "Thailand",
    code: "TH",
    flag: "🇹🇭",
    timezone: "Asia/Bangkok",
    greeting: "สวัสดี",
    utcOffset: "UTC+07:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "เช้า" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "บ่าย" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "เย็น" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "กลางคืน" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Asia/Kolkata": {
    name: "India",
    code: "IN",
    flag: "🇮🇳",
    timezone: "Asia/Kolkata",
    greeting: "नमस्ते",
    utcOffset: "UTC+05:30",
    timeBlocks: [
      {
        name: { en: "Morning", native: "सुबह" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "दोपहर" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "शाम" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "रात" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Europe/Moscow": {
    name: "Russia",
    code: "RU",
    flag: "🇷🇺",
    timezone: "Europe/Moscow",
    greeting: "Привет",
    utcOffset: "UTC+03:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Утро" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "День" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Вечер" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Ночь" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Europe/Paris": {
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    timezone: "Europe/Paris",
    greeting: "Bonjour",
    utcOffset: "UTC+01:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Matin" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Après-midi" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Soir" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Nuit" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Europe/Berlin": {
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    timezone: "Europe/Berlin",
    greeting: "Hallo",
    utcOffset: "UTC+01:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Morgen" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Nachmittag" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Abend" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Nacht" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Europe/London": {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    timezone: "Europe/London",
    greeting: "Hello",
    utcOffset: "UTC+00:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Morning" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Afternoon" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Evening" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Night" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "America/New_York": {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    timezone: "America/New_York",
    greeting: "Hi",
    utcOffset: "UTC-05:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Morning" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Afternoon" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Evening" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Night" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "America/Los_Angeles": {
    name: "United States (West)",
    code: "US",
    flag: "🇺🇸",
    timezone: "America/Los_Angeles",
    greeting: "Hi",
    utcOffset: "UTC-08:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Morning" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Afternoon" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Evening" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Night" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Australia/Sydney": {
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    timezone: "Australia/Sydney",
    greeting: "G'day",
    utcOffset: "UTC+10:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Morning" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Arvo" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Evening" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Night" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Pacific/Auckland": {
    name: "New Zealand",
    code: "NZ",
    flag: "🇳🇿",
    timezone: "Pacific/Auckland",
    greeting: "Kia ora",
    utcOffset: "UTC+12:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Ata" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Arvo" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Evening" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Night" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Europe/Prague": {
    name: "Czech Republic",
    code: "CZ",
    flag: "🇨🇿",
    timezone: "Europe/Prague",
    greeting: "Ahoj",
    utcOffset: "UTC+01:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Ráno" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Odpoledne" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Večer" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Noc" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
  "Europe/Budapest": {
    name: "Hungary",
    code: "HU",
    flag: "🇭🇺",
    timezone: "Europe/Budapest",
    greeting: "Szia",
    utcOffset: "UTC+01:00",
    timeBlocks: [
      {
        name: { en: "Morning", native: "Reggel" },
        emoji: "⛅",
        hours: [6, 7, 8, 9, 10, 11],
      },
      {
        name: { en: "Afternoon", native: "Délután" },
        emoji: "☀️",
        hours: [12, 13, 14, 15, 16, 17],
      },
      {
        name: { en: "Evening", native: "Este" },
        emoji: "🌅",
        hours: [18, 19, 20, 21],
      },
      {
        name: { en: "Night", native: "Éjszaka" },
        emoji: "🌙",
        hours: [22, 23, 0, 1, 2, 3, 4, 5],
      },
    ],
  },
};

export const UTC_RANGES: Record<string, string[]> = {
  "UTC+12:00": ["Pacific/Auckland"],
  "UTC+10:00": ["Australia/Sydney"],
  "UTC+09:00": ["Asia/Tokyo", "Asia/Seoul"],
  "UTC+08:00": ["Asia/Shanghai", "Asia/Singapore"],
  "UTC+07:00": ["Asia/Bangkok"],
  "UTC+05:30": ["Asia/Kolkata"],
  "UTC+03:00": ["Europe/Moscow"],
  "UTC+01:00": [
    "Europe/Berlin",
    "Europe/Paris",
    "Europe/Prague",
    "Europe/Budapest",
  ],
  "UTC+00:00": ["Europe/London"],
  "UTC-05:00": ["America/New_York"],
  "UTC-08:00": ["America/Los_Angeles"],
};
