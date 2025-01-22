import { ActivityData, AnalysisResult, DailyRhythm } from "../types";
import { COUNTRY_DATA, UTC_RANGES } from "../utils/constants";

export class ActivityAnalyzer {
  analyze(
    activities: ActivityData[]
  ): AnalysisResult & { rhythm: DailyRhythm } {
    const mostActiveHour = activities.reduce((prev, current) =>
      current.count > prev.count ? current : prev
    ).hour;

    // UTC 오프셋 계산 및 시간대 결정
    const localOffset = new Date().getTimezoneOffset() / 60;
    const adjustedHour = (mostActiveHour + localOffset + 24) % 24;
    const utcOffset = Math.floor(adjustedHour / 2) - 6;

    // 가장 적합한 시간대 찾기
    const timezoneName = this.findBestTimezone(utcOffset);

    // 활동 리듬 분석
    const rhythm = this.analyzeRhythm(
      activities,
      COUNTRY_DATA[timezoneName].timeBlocks
    );

    return {
      mostActiveHour,
      timezoneName,
      utcOffset,
      rhythm,
    };
  }

  private findBestTimezone(utcOffset: number): string {
    const utcString = `UTC${utcOffset >= 0 ? "+" : ""}${String(
      Math.abs(utcOffset)
    ).padStart(2, "0")}:00`;
    const timezones = UTC_RANGES[utcString] || ["Asia/Seoul"];
    return timezones[0];
  }

  private analyzeRhythm(
    activities: ActivityData[],
    timeBlocks: any[]
  ): DailyRhythm {
    const rhythm = {
      morning: 0,
      afternoon: 0,
      evening: 0,
      night: 0,
    };

    activities.forEach(({ hour, count }) => {
      if (timeBlocks[0].hours.includes(hour)) rhythm.morning += count;
      else if (timeBlocks[1].hours.includes(hour)) rhythm.afternoon += count;
      else if (timeBlocks[2].hours.includes(hour)) rhythm.evening += count;
      else rhythm.night += count;
    });

    return rhythm;
  }
}
