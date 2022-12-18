import { useEffect, useState } from 'react';

import { getScores } from '../services/scoresApi'
import config from '../config'

export function useFetchScores(isPolling) {
  const [scores, setScores] = useState()

  useEffect(() => {
    let isIgnor = false
    let intervalId
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