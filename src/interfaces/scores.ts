export type MatchType = {
  match_id: number,
  round: number,
  tournament_id: number,
  home_team_id: number,
  away_team_id: number,
}

export type EventType = {
  match_id: number,
  event_id: number,
  event_time: number,
  event_type?: 'goal',
  score_team?: 'home' | 'away',
  score_amount: number,
}

export type TeamType = {
  team_id: number,
  team_name: string,
  team_name_short: string,
}

export type FormatedTeamType = {
  id: number,
  name: string,
  img: string,
  shortName: string,
}

export type FormatedTeamsType = Record<string, FormatedTeamType>

export type TeamScoreType = Record<string, number>

export interface ScoreType {
  phase: 'pre_match' | 'match' | 'post_match',
  matches: MatchType[],
  events: EventType[],
  teams: TeamType[]
}