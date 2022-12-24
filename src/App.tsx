import { useFetchScores } from './customHooks/useFetchScores';

import ScoreDashboard from './components/ScoreDashboard';
import ErrorBoundary from './components/ErrorBoundary';

import strings from './assets/strings'

import './App.scss';

function App() {
  const isScoresPolling = true
  const scores = useFetchScores(isScoresPolling)

  return (
    <div className="app-container">
      <ErrorBoundary
        fallback={<h1 className="app-container-info">{strings.error}</h1>}
      >
        {!scores ? <h1 className="app-container-info">{strings.loading}</h1> : (
          <ScoreDashboard
            matches={scores.matches}
            teams={scores.teams}
            events={scores.events}
          />
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
