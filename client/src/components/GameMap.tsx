import React from 'react';

interface GameMapProps {
  width?: number;
  height?: number;
}

const GameMap: React.FC<GameMapProps> = ({ width = 600, height = 600 }) => {
  const gridSize = 10; 
  const cellSize = Math.min(width, height) / gridSize;

  const locations = [
    { x: 5, y: 5, type: 'cornucopia', name: 'Cornucopia' },
    { x: 2, y: 2, type: 'forest', name: 'Forest' },
    { x: 8, y: 8, type: 'water', name: 'Lake' },
    { x: 1, y: 8, type: 'mountain', name: 'Hills' },
    { x: 8, y: 2, type: 'ruins', name: 'Ruins' }
  ];

  const renderCell = (row: number, col: number) => {
    const location = locations.find(loc => loc.x === col && loc.y === row);
    
    return (
      <div
        key={`${row}-${col}`}
        className="map-cell"
        style={{
          width: cellSize,
          height: cellSize,
          border: '1px solid #ccc',
          backgroundColor: location ? getLocationColor(location.type) : '#90EE90',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
          fontWeight: 'bold',
          color: location ? '#fff' : '#666',
          position: 'relative'
        }}
        title={location ? `${location.name} (${col}, ${row})` : `(${col}, ${row})`}
      >
        {location && (
          <>
            <div style={{ textAlign: 'center', lineHeight: 1 }}>
              {getLocationIcon(location.type)}
              <div style={{ fontSize: '8px' }}>{location.name}</div>
            </div>
          </>
        )}
      </div>
    );
  };
  const getLocationColor = (type: string) => {
    const colors: { [key: string]: string } = {
      cornucopia: '#FFD700', 
      forest: '#228B22',      
      water: '#1E90FF',      
      mountain: '#696969',    
      ruins: '#8A2BE2'        
    };
    return colors[type] || '#FF0000';
  };
  const getLocationIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      cornucopia: 'Cornucopia',
      forest: 'Forest',
      water: 'Water',
      mountain: 'Mountain',
      ruins: 'Ruins'
    };
    return icons[type] || 'X';
  };

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%',
        border: '2px solid #34495e',
        borderRadius: '8px',
        overflow: 'hidden',
        padding: '20px',
        backgroundColor: '#f0f0f0'
      }}
    > 
      <div 
        className="game-map-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gap: '0',
          maxWidth: Math.min(width, height),
          maxHeight: Math.min(width, height),
          margin: '0 auto',
          border: '2px solid #2c3e50'
        }}
      >
        {Array.from({ length: gridSize }, (_, row) =>
          Array.from({ length: gridSize }, (_, col) => renderCell(row, col))
        )}
      </div>
    </div>
  );
};

export default GameMap;
