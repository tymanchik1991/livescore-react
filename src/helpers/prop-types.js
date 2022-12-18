import PropTypes from 'prop-types'

export const EventType = {
  event_id: PropTypes.number,
  event_time: PropTypes.number,
  event_type: PropTypes.string,
  match_id: PropTypes.number,
  score_amount: PropTypes.number,
  score_team: PropTypes.string,
}

export const MatchType = {
  away_team_id: PropTypes.number,
  home_team_id : PropTypes.number,
  match_id: PropTypes.number,
  round: PropTypes.number,
  tournament_id: PropTypes.number,
}

export const TeamType = {
  team_id: PropTypes.number,
  team_name: PropTypes.string,
  team_name_short: PropTypes.string,
}