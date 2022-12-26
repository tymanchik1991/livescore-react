import { renderHook, waitFor } from '@testing-library/react'
import { getScores } from '../services/scoresApi'
import { useFetchScores } from './useFetchScores'

import * as mocks from '../helpers/testMocks'


const mockedGetScore = (getScores as jest.Mock)
jest.mock('../services/scoresApi', () => ({
  getScores: jest.fn()
}))

describe('useFetchScores', () => {
  beforeEach(() => {
    mockedGetScore.mockResolvedValue(mocks.scoresMock)
  })
  it('should return scores', async () => {
    const { result } = renderHook(() => useFetchScores(true))

    expect(result.current?.events).toBe(undefined)
    expect(result.current?.matches).toBe(undefined)
    expect(result.current?.phase).toBe(undefined)
    expect(result.current?.teams).toBe(undefined)

    expect(getScores).toHaveBeenCalledTimes(1)

    await waitFor(() => {
      expect(result.current).toEqual(mocks.scoresMock)
    })

  })
})