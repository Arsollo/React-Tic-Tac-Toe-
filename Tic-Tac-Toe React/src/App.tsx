import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  const [count, setCount] = useState(0)
  const [squares, setSquares] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  const [player, setPlayer] = useState("X")

  function switchPlayer(){
    if (player == "X"){
      setPlayer("O")
    }else setPlayer("X")
  }

  function fillSquare(squareid:number, currentValue:string){
    if (currentValue == " "){
      var temp = squares
      temp[squareid] = player
      setSquares(temp)
      switchPlayer()
    }else{

    }
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <ButtonGroup size="lg" className="game_squares_group">
        <Button id='game_squares' onClick={()=> fillSquare(0,squares[0])}>{squares[0]}</Button>
        <Button id='game_squares' onClick={()=> fillSquare(1,squares[1])}>{squares[1]}</Button>
        <Button id='game_squares' onClick={()=> fillSquare(2,squares[2])}>{squares[2]}</Button>
      </ButtonGroup>
      <ButtonGroup size="lg" className="game_squares_group">
        <Button id='game_squares' onClick={()=> fillSquare(3,squares[3])}>{squares[3]}</Button>
        <Button id='game_squares' onClick={()=> fillSquare(4,squares[4])}>{squares[4]}</Button>
        <Button id='game_squares' onClick={()=> fillSquare(5,squares[5])}>{squares[5]}</Button>
      </ButtonGroup>
      <ButtonGroup size="lg" className="game_squares_group">
        <Button id='game_squares' onClick={()=> fillSquare(6,squares[6])}>{squares[6]}</Button>
        <Button id='game_squares' onClick={()=> fillSquare(7,squares[7])}>{squares[7]}</Button>
        <Button id='game_squares' onClick={()=> fillSquare(8,squares[8])}>{squares[8]}</Button>
      </ButtonGroup>
      




      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
