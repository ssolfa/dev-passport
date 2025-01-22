import { Octokit } from "@octokit/rest";
import { CountryInfo, DailyRhythm } from "../types";

export class GistAPI {
  private octokit: Octokit;

  constructor(token: string) {
    this.octokit = new Octokit({ auth: token });
  }

  async updateGist(
    gistId: string,
    data: {
      countryInfo: CountryInfo;
      rhythm: DailyRhythm;
    }
  ): Promise<void> {
    const { countryInfo, rhythm } = data;
    const maxCount = Math.max(
      rhythm.morning,
      rhythm.afternoon,
      rhythm.evening,
      rhythm.night
    );
    const getBar = (count: number) =>
      "█".repeat(Math.ceil((count / maxCount) * 10));

    const content = `${countryInfo.greeting}, I'm from ${countryInfo.flag} ${
      countryInfo.name
    } (${countryInfo.utcOffset})
  ${countryInfo.timeBlocks[0].emoji} ${getBar(rhythm.morning)}  ${
      countryInfo.timeBlocks[1].emoji
    } ${getBar(rhythm.afternoon)}  ${countryInfo.timeBlocks[2].emoji} ${getBar(
      rhythm.evening
    )}  ${countryInfo.timeBlocks[3].emoji} ${getBar(rhythm.night)}`;

    await this.octokit.gists.update({
      gist_id: gistId,
      files: {
        "github-profile.txt": {
          content,
        },
      },
    });
  }
}
