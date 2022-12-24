import { useEffect, useState } from 'react';

import { getScores } from '../services/scoresApi'

import { ScoreType } from '../interfaces/scores'

import config from '../config'

export function useFetchScores(isPolling: boolean) {
  const [scores, setScores] = useState<ScoreType>()

  useEffect(() => {
    let isIgnor = false
    let intervalId: NodeJS.Timer
    const fetchScores = async () => {
      const response = await getScores()
      if (response && !isIgnor) {
        setScores(response)
      }
    }

    fetchScores()
    if (isPolling) {
      intervalId = setInterval(
        fetchScores,
        config.scoreFetchingInterval,
      )
    }

    return () => {
      isIgnor = true
      intervalId && clearInterval(intervalId)
    }
  }, [isPolling])

  return scores
}