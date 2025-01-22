import { Octokit } from "@octokit/rest";
import { ActivityData } from "../types";

export class GitHubAPI {
  private octokit: Octokit;

  constructor(token: string) {
    this.octokit = new Octokit({ auth: token });
  }

  async getActivityData(): Promise<ActivityData[]> {
    const query = `
      query {
        viewer {
          contributionsCollection {
            commitContributionsByRepository {
              repository {
                name
              }
              contributions {
                nodes {
                  commitCount
                  occurredAt
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await this.octokit.graphql<any>(query);
      const hourCount = new Array(24).fill(0);

      response.viewer.contributionsCollection.commitContributionsByRepository.forEach(
        (repo: any) => {
          repo.contributions.nodes.forEach((contribution: any) => {
            const hour = new Date(contribution.occurredAt).getHours();
            hourCount[hour] += contribution.commitCount;
          });
        }
      );

      return hourCount.map((count, hour) => ({ hour, count }));
    } catch (error) {
      console.warn("GraphQL query failed, falling back to REST API");
      return this.getCommitDataFromRest();
    }
  }

  private async getCommitDataFromRest(): Promise<ActivityData[]> {
    const hourCount = new Array(24).fill(0);
    const since = new Date();
    since.setDate(since.getDate() - 30);

    try {
      const { data: events } =
        await this.octokit.activity.listEventsForAuthenticatedUser({
          username: (await this.octokit.users.getAuthenticated()).data.login,
          per_page: 100,
        });

      events.forEach((event) => {
        if (event.type === "PushEvent" && event.created_at) {
          const hour = new Date(event.created_at).getHours();
          hourCount[hour]++;
        }
      });

      return hourCount.map((count, hour) => ({ hour, count }));
    } catch (error) {
      console.error("Failed to fetch activity data:", error);
      throw error;
    }
  }
}
