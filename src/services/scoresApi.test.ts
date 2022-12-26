import scoresApi from './scoresApi'

import * as mocks from '../helpers/testMocks'

const mockedGetScore = (scoresApi.getScores as jest.Mock)
jest.mock('./scoresApi', () => ({
  getScores: jest.fn(),
}))

describe('scoresApi.getScores', () => {
  describe('when response is scores object', () => {
    beforeEach(() => {
      mockedGetScore.mockResolvedValue(mocks.scoresMock)
    })

    it('fetch scores', async () => {
      const response = await scoresApi.getScores()
      expect(response).toEqual(mocks.scoresMock)
    })
  })

  describe('when the fetch fails', () => {
    beforeEach(() => {
      mockedGetScore.mockRejectedValue(null)
    })

    it('should be undefined in the response', () => {
      expect(scoresApi.getScores()).rejects.toThrowError()
    })
  })
})