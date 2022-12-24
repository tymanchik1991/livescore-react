import { useMemo } from 'react'

import Match from '../Match'

import { calculateScores, formatTeamsData } from '../../helpers/utils'

import { EventType, MatchType, TeamType, TeamScoreType } from '../../interfaces/scores'

import './index.scss'

interface ScoreDashboardProps {
  matches: MatchType[],
  teams: TeamType[],
  events: EventType[],
}

function ScoreDashboard({
  matches,
  teams,
  events,
}: ScoreDashboardProps) {
  let teamsScore: TeamScoreType = {}
  const formatedTeamsData = useMemo(() => {
    return formatTeamsData(teams)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (events.length) {
    teamsScore = calculateScores(events, matches)
  } else {
    teamsScore = {}
  }

  return (
    <div
      className="score-board-container"
    >
      <div className="score-board-matches-wrapper">
        {matches.map((match) => (
          <Match
            key={match.match_id}
            homeTeamScore={teamsScore[match.home_team_id] || 0}
            awayTeamScore={teamsScore[match.away_team_id] || 0}
            homeTeam={formatedTeamsData[match.home_team_id]}
            awayTeam={formatedTeamsData[match.away_team_id]}
          />
        ))}
      </div>
    </div>
  )
}

export default ScoreDashboard