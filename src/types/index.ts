export interface CountryInfo {
  name: string;
  code: string;
  flag: string;
  timezone: string;
  greeting: string;
  utcOffset: string;
  timeBlocks: TimeBlock[];
}

export interface TimeBlock {
  name: {
    en: string;
    native: string;
  };
  emoji: string;
  hours: number[];
}

export interface ActivityData {
  hour: number;
  count: number;
}

export interface DailyRhythm {
  morning: number;
  afternoon: number;
  evening: number;
  night: number;
}

export interface AnalysisResult {
  mostActiveHour: number;
  timezoneName: string;
  utcOffset: number;
}

export interface GitHubContributionNode {
  commitCount: number;
  occurredAt: string;
}

export interface GitHubContribution {
  nodes: GitHubContributionNode[];
}

export interface ContributionsByRepository {
  repository: {
    name: string;
  };
  contributions: GitHubContribution;
}

export interface ContributionsCollection {
  commitContributionsByRepository: ContributionsByRepository[];
}

export interface GraphQLResponse {
  viewer: {
    contributionsCollection: ContributionsCollection;
  };
}
