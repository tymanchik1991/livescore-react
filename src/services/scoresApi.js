import { request } from './api'

import config from "../config"

export function getScores() {
  return request(config.scoresApiUrl)
}

const ScoresApi = {
  getScores,
}

export default ScoresApi
