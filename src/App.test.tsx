import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import ScoreDashboard from './components/ScoreDashboard'
import Match from './components/Match'

import { getScores } from './services/scoresApi'

import * as mocks from './helpers/testMocks';

const mockedGetScore = (getScores as jest.Mock)
jest.mock('./services/scoresApi', () => ({
  getScores: jest.fn(),
}))

describe('App - without error', () => {
  beforeEach(() => {
    mockedGetScore.mockResolvedValue(mocks.scoresMock)
  })

  it('displays the loading and then fetched scores', async () => {
    render(<App />)
    // showing loading
    expect(screen.getByText(/Loading/i)).toBeInTheDocument()
    // showing data
    await waitFor(() => {
      expect(screen.getByText('TMNT')).toBeInTheDocument()
    })
  })
})

describe('App - with error', () => {
  beforeEach(() => {
    mockedGetScore.mockRejectedValue(null)
  })
  it('should render the error indicator', () => {
    render(<App />)
    waitFor(() => expect(screen.getByText(/Oops! Something Went Wrong.../i)).toBeInTheDocument())
    expect(mockedGetScore).rejects.toThrowError()
  })
})

describe('ScoreDashboard', () => {
  it('should display passed teams', () => {
    render(<ScoreDashboard
      events={mocks.scoresMock.events}
      matches={mocks.scoresMock.matches}
      teams={mocks.scoresMock.teams}
    />)

    expect(screen.getByText('TMNT')).toBeInTheDocument()
    expect(screen.getByText('NCL')).toBeInTheDocument()
  })
})

describe('Match', () => {
  it('display result of the match', () => {
    render(<Match
      awayTeam={mocks.formatedTeamsMock[0]}
      homeTeam={mocks.formatedTeamsMock[1]}
      awayTeamScore={5}
      homeTeamScore={10}
    />)

    // rendered teams
    expect(screen.getByText('TMNT')).toBeInTheDocument()
    expect(screen.getByText('NCL')).toBeInTheDocument()

    // team's scores
    expect(screen.getByText(5)).toBeInTheDocument()
    expect(screen.getByText(10)).toBeInTheDocument()
  })
})


