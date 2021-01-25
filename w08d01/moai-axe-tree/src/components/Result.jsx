import { useState } from 'react';
import axios from 'axios';

const Result = () => {
  const [highScores, setHighScores] = useState([]);

  const fetchHighScores = () => {
    axios
      .get('https://my-json-server.typicode.com/andydlindsay/moai-axe-tree/high-scores')
      .then(data => setHighScores(data.data))
      .catch(err => console.error(err));
  };
    
  return(
    <footer data-testid="result_footer">
      <h2>Waiting for your choice!</h2>
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      { highScores.map(highScore => <p key={highScore.id}>{highScore.name}: {highScore.points}</p>) }
    </footer>
  );
}

export default Result;
