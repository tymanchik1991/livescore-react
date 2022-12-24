import { memo } from 'react'

import { FormatedTeamType } from '../../interfaces/scores'

import './index.scss'

interface MatchProps {
  homeTeam: FormatedTeamType,
  awayTeam: FormatedTeamType,
  homeTeamScore: number,
  awayTeamScore: number,
}

function Match({
  homeTeam,
  awayTeam,
  homeTeamScore,
  awayTeamScore,
}: MatchProps) {
  function resolveClassName(score: number) {
    return !!score ? 'scored' : ''
  }

  return (
    <div className="match-row-wrapper">
      <div className="match-row-home-team">
        <span className="match-row-team-name">
          {homeTeam.shortName}
        </span>
        <img src={homeTeam.img} alt={homeTeam.name} />
      </div>
      <div className="match-row-score-table">
        <span key={`home_${homeTeamScore}`} className={resolveClassName(homeTeamScore)}>
          {homeTeamScore}
        </span> : <span key={`away_${awayTeamScore}`} className={resolveClassName(awayTeamScore)}>
          {awayTeamScore}
        </span>
      </div>
      <div className="match-row-away-team">
        <img src={awayTeam.img} alt={awayTeam.name} />
        <span className="match-row-team-name">
          {awayTeam.shortName}
        </span>
      </div>
    </div>
  )
}

const MemoMatch = memo(Match)

export default MemoMatch