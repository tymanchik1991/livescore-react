import { ScoreType, TeamType, EventType, MatchType } from "../interfaces/scores"

export const matchMock: MatchType = {
  round: 1,
  tournament_id: 1,
  match_id: 1, 
  home_team_id: 8982001,
  away_team_id: 8982002,
}

export const eventGoalHomeTeamMock: EventType = {
  event_id: 1, event_type: 'goal', event_time: 8, match_id: 1, score_amount: 1, score_team: 'home',
}
export const eventGoalAwayTeamMock: EventType = {
  event_id: 2, event_time: 22, event_type: 'goal', match_id: 1, score_amount: 1, score_team: 'away',
}
export const eventMatchStartMock: EventType = {
  event_id: 3, event_type: 'match_start', event_time: 0, match_id: 1,
}

export const teamsMock: TeamType[] = [
  {
    team_id: 8982001,
    team_name: 'Teenage Mutant Ninja Turtles',
    team_name_short: 'TMNT',
  },
  {
    team_id: 8982002,
    team_name: 'Nickelodeon',
    team_name_short: 'NCL',
  }
]

export const formatedTeamsMock = [
  {
    id: 8982001,
    name: 'Teenage Mutant Ninja Turtles',
    img: 'logo_8982001.png',
    shortName: 'TMNT',
  },
  {
    id: 8982002,
    name: 'Nickelodeon',
    img: 'logo_8982002.png',
    shortName: 'NCL',
  }
]

export const scoresMock: ScoreType = {
  phase: 'match',
  events: [
    eventGoalHomeTeamMock,
    eventGoalAwayTeamMock,
    eventMatchStartMock,
  ],
  matches: [matchMock],
  teams: teamsMock,
}