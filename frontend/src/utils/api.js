

export async function fetchMCTSAction(gameState) {
    try {
      const response = await fetch('http://localhost:5000/api/mcts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: gameState })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Lỗi khi gọi API MCTS:', error);
      return null;
    }
  }
  
  export async function fetchMARLAction(gameState) {
    try {
      const response = await fetch('http://localhost:5000/api/marl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: gameState })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Lỗi khi gọi API MARL:', error);
      return null;
    }
  }