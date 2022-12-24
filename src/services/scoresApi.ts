import { request } from './api'

import { ScoreType } from '../interfaces/scores'

import config from "../config"

export function getScores() {
  return request<ScoreType>(config.scoresApiUrl)
}

const ScoresApi = {
  getScores,
}

export default ScoresApi
