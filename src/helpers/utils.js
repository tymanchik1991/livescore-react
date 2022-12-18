import {
  EVENT_TYPE_GOAL,
  EVENT_SCORE_TEAM_HOME,
  HOME_TEAM_ID,
  AWAY_TEAM_ID,
} from '../constants'

export function resolveImagePath(relativePath) {
  try {
    return require(`../${relativePath}`)
  } catch (error) {
    return null
  }
}

export function formatTeamsData(teams) {
  if (!teams) return []
  return teams.reduce((acc, team) => {
    acc[team.team_id] = {
      id: team.team_id,
      name: team.team_name,
      img: resolveImagePath(`assets/teams/logo_${team.team_id}.png`),
      shortName: team.team_name_short,
    }
    return acc
  }, {})
}

export function calculateScores(events, matches) {
  return events.reduce((acc, event) => {
    if (event.event_type === EVENT_TYPE_GOAL) {
      const teamIdField = event.score_team === EVENT_SCORE_TEAM_HOME ? HOME_TEAM_ID : AWAY_TEAM_ID
      const match = matches.find(match => match.match_id === event.match_id)
      if (match) {
        const scoredTeamId = match[teamIdField]
        const prevScoreAmount = acc[scoredTeamId] || 0
        const newScoreAmount = event.score_amount
        acc[scoredTeamId] = prevScoreAmount + newScoreAmount
      }
    }
    return acc
  }, {})
}