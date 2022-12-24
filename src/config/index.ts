import { ConfigType } from "../interfaces/config"

const scoresApiUrl = process.env.REACT_APP_API_URL || ''

const config: ConfigType = {
  scoreFetchingInterval: 10000,
  scoresApiUrl,
}

export default config