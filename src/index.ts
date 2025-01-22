import dotenv from "dotenv";
import { GistAPI } from "./api/gist";
import { GitHubAPI } from "./api/github";
import { ActivityAnalyzer } from "./services/activityAnalyzer";
import { PersonaGenerator } from "./services/personaGenerator";
import { CountryInfo } from "./types";

export const COUNTRY_DATA: Record<string, CountryInfo> = {
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
  // 더 많은 국가 추가 가능
};

export const UTC_RANGES = {
  "UTC+09:00": ["Asia/Tokyo", "Asia/Seoul"],
  "UTC+01:00": ["Europe/Amsterdam", "Europe/Paris"],
  "UTC-05:00": ["America/New_York"],
};

dotenv.config();

async function main() {
  try {
    const githubAPI = new GitHubAPI(process.env.GH_TOKEN!);
    const gistAPI = new GistAPI(process.env.GH_TOKEN!);
    const analyzer = new ActivityAnalyzer();
    const generator = new PersonaGenerator();

    const activities = await githubAPI.getActivityData();
    const { timezoneName, rhythm } = analyzer.analyze(activities);
    const countryInfo = generator.generate(timezoneName);

    await gistAPI.updateGist(process.env.GIST_ID!, {
      countryInfo,
      rhythm,
    });

    console.log("Successfully updated profile!");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
