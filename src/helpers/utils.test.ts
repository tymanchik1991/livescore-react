import {
  teamsMock,
  formatedTeamsMock,
  eventGoalAwayTeamMock,
  eventGoalHomeTeamMock,
  eventMatchStartMock,
  matchMock,
} from './testMocks'

import {
  resolveImagePath,
  formatTeamsData,
  calculateScores,
} from './utils'

describe('resolveImagePath', () => {
  it('returns relative path to the image by team`s id', () => {
    const teamId = '8982001'
    const relativePath = `assets/teams/logo_${teamId}.png`
    const recievedValue = 'logo_8982001.png'
    expect(resolveImagePath(relativePath)).toEqual(recievedValue)
  })

  it('should return an empty string if there is no image by team\'s id', () => {
    const wrongRelativePath = 'assets/fakeFolder/notgin_there.png'
    expect(resolveImagePath(wrongRelativePath)).toEqual('')
  })
})

describe('formatTeamsData', () => {
  it('should return formated to an object and enriched with image team\'s data', () => {
    const expectedResult = {
      '8982001': formatedTeamsMock[0],
      '8982002': formatedTeamsMock[1],
    }

    expect(formatTeamsData(teamsMock)).toEqual(expectedResult)
  })

  it('should return an empty object if array is empty', () => {
    expect(formatTeamsData([])).toEqual({})
  })
})

describe('calculateScores', () => {
  it('should calculate total score from events', () => {
    const matches = [matchMock]
    const matchStartedEvents = [eventMatchStartMock]
    const goalsEvents = [
      eventGoalAwayTeamMock,
      eventGoalAwayTeamMock,
      eventGoalAwayTeamMock,
      eventGoalHomeTeamMock,
    ]
    const receivedValue = {
      [matchMock.home_team_id]: 1,
      [matchMock.away_team_id]: 3,
    }

    // calculate 'match started' events
    expect(calculateScores(matchStartedEvents, matches)).toEqual({})

    // calculate several 'goal' events
    expect(calculateScores(goalsEvents, matches)).toEqual(receivedValue)
  })
})