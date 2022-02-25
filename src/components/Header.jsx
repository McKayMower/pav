import '../css for components/Header.css'
import { useState, } from 'react'

const Header = ({ outgoingAlgorithm, outgoingMazeAlgorithm, outgoingClearBoard, outgoingClearPath, outgoingVisualizeCommand, outgoingPausePlay }) => {

    const sendAlgorithm = (algo) => {
        outgoingAlgorithm(algo)
    }

    const sendMaze = (algo) => {
        outgoingMazeAlgorithm(algo)
    }
    const sendClearBoard = () => {
        outgoingClearBoard(Math.random())
    }

    const sendClearPath = () => {
        outgoingClearPath(Math.random())
    }

    const sendVisualize = () => {
        outgoingVisualizeCommand(Math.random())
    }

    const sendPausePlay = () => {
        outgoingPausePlay(!paused)
    }

    const [showAlgoMenu, setShowAlgoMenu] = useState(false)
    const [showMazeMenu, setShowMazeMenu] = useState(false)
    const [visualizeString, setVisualizeString] = useState('Show Me!')
    const [paused, setPaused] = useState(false)
    const [visualizing, setVisualizing] = useState(false)

    return (
        <div className='header-container'>

            <h1 className='title'
                onClick={() => window.location.reload()}>Pathfinding Visualizer</h1>

            <button className='maze-select'
                onClick={() => setShowMazeMenu(!showMazeMenu ? true : false)}
                onMouseEnter={() => setShowMazeMenu(true)}
                onMouseLeave={() => setShowMazeMenu(false)}>
                Select Maze Algorithm
                {showMazeMenu &&
                    <div className='menu'>
                        <button onClick={() => {
                            sendMaze('Depth First Maze')
                        }}>Depth First Maze</button>

                    </div>

                }
            </button>

            <button className='algo-select'
                onClick={() => setShowAlgoMenu(!showAlgoMenu ? true : false)}
                onMouseEnter={() => setShowAlgoMenu(true)}
                onMouseLeave={() => setShowAlgoMenu(false)}>
                Select Path Algorithm
                {showAlgoMenu && <div className='menu'>
                    <button onClick={() => {
                        sendAlgorithm('dijkstras')
                        setVisualizeString('Show Me Dijkstra\'s!')
                    }}>Dijkstra's</button>
                    <button onClick={() => {
                        sendAlgorithm('depth-first')
                        setVisualizeString('Show Me Depth-First!')
                    }}>Depth-First</button>
                    <button onClick={() => {
                        sendAlgorithm('breadth-first')
                        setVisualizeString('Show Me Breadth-First!')
                    }}>Breadth-First</button>
                </div>

                }
            </button>

            <button
                className='visualize-button'
                onClick={() => {
                    if (visualizeString === 'Show Me!') {
                        setVisualizeString('Pick an Algorithm')
                        return
                    }
                    if (visualizeString !== 'Show Me!' && visualizeString !== 'Pick an Algorithm') {
                        setVisualizing(true)
                        sendVisualize()
                        //setPaused(false)
                    }
                }}>
                {visualizeString}
            </button>
            <button className='clear-board-button'
                onClick={() => {
                    sendClearBoard()
                    setVisualizeString('Show Me!')
                }}
            >
                Clear Board
            </button>
            <button className='clear-path-button'
                onClick={() => {
                    sendClearPath()
                    setVisualizeString('Show Me!')
                }}
            >
                Clear Path
            </button>

            {/* {visualizing &&
                <button className='pause-play-button'
                    onClick={() => {
                        !paused ? setPaused(true) : setPaused(false)
                        sendPausePlay()
                    }}
                >
                    {paused ? 'Resume Visualization' : 'Pause Visualization'}
                </button>
            } */}

        </div >

    )
}

export default Header
