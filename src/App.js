import './App.css';
import Board from './components/Board'
import Header from './components/Header'
import { useState,} from 'react'

function App() {
  const [algorithm, setAlgorithm] = useState('')
  const [visualizeCommand, setVisualizeCommand] = useState('')
  const [clearBoard, setClearBoard] = useState(0)
  const [clearPath, setClearPath] = useState(0)
  const [pausePlay, setPausePlay] = useState()
  const [maze, setMaze] = useState('')

  const setMazeAlgo = (algo) => {
    setMaze(algo)
  }
  const setAlgo = (algo) => {
    setAlgorithm(algo)
  }

  const setVisualizeCom = (com) => {
    setVisualizeCommand(com)
  }

  const setClearBo = (com) => {
    setClearBoard(com)
  }
  
  const setClearPa = (com) => {
    setClearPath(com)
  }

  const setPP = (com) => {
    setPausePlay(com)
  }
  
  return (
    <div className="App">
      <Header outgoingAlgorithm={setAlgo} 
              outgoingMazeAlgorithm={setMazeAlgo}
              outgoingClearBoard={setClearBo} 
              outgoingClearPath={setClearPa} 
              outgoingVisualizeCommand={setVisualizeCom}
              outgoingPausePlay={setPP}/>
      <Board incomingAlgorithm={algorithm} 
             incomingMazeAlgorithm={maze}
             incomingClearBoard={clearBoard} 
             incomingClearPath={clearPath} 
             incomingVisualizeCommand={visualizeCommand}
             incomingPausePlay={pausePlay}/>
    </div>
  );
}

export default App;
