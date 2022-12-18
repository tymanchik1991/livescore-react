import { memo } from 'react'
import PropTypes from 'prop-types'

import { TeamType } from '../../helpers/prop-types'

import './index.scss'

function Match({
  homeTeam,
  awayTeam,
  homeTeamScore,
  awayTeamScore,
}) {
  function resolveClassName(score) {
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

const MatchTeamType = {
  ...TeamType,
  img: PropTypes.string,
}

MemoMatch.propTypes = {
  homeTeam: PropTypes.shape(MatchTeamType),
  awayTeam: PropTypes.shape(MatchTeamType),
  homeTeamScore: PropTypes.number,
  awayTeamScore: PropTypes.number,
}

export default MemoMatch