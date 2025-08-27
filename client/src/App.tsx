import React, { useState, useEffect } from 'react';
import './App.css';
import { apiService } from './services/api';
import GameMap from './components/GameMap';
import TributeCreation from './components/Tributes';

interface HealthData {
  status: string;
  timestamp: string;
  uptime: number;
}

function App() {
  const [serverStatus, setServerStatus] = useState<string>('Checking...');
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    checkServerHealth();
  }, []);

  const checkServerHealth = async () => {
    try {
      setIsLoading(true);
      const data = await apiService.healthCheck();
      setHealthData(data);
      setServerStatus('Connected ✅');
      setError(null);
    } catch (err) {
      setServerStatus('Disconnected ❌');
      setError('Unable to connect to server. Make sure the server is running on port 5000.');
      console.error('Server connection error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const startSim = () => {
    setShowGame(true);
  };

  return (
    <div className="App">
      <header className="App-header">

        
        <div className="server-status">
          <h3>Server Status: {serverStatus}</h3>
          {isLoading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {healthData && (
            <div className="health-info">
              <p>Status: {healthData.status}</p>
              <p>Uptime: {Math.floor(healthData.uptime)} seconds</p>
              <p>Last check: {new Date(healthData.timestamp).toLocaleTimeString()}</p>
            </div>
          )}
        </div>

        <div className="action-buttons">
          <button onClick={startSim} disabled={!!error}>
            {showGame ? 'RESTART' : 'START SIMULATION'}
          </button>
          {showGame && (
            <button onClick={() => setShowGame(false)}>
              HIDE MAP
            </button>
          )}
        </div>

        {showGame && (
          <div className="game-container">
            <h3>🗺️ Arena Map</h3>
            <GameMap width={1800} height={1080} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
