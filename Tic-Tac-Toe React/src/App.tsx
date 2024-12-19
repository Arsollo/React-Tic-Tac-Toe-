import { useEffect, useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  const [count, setCount] = useState(0)
  const [squares, setSquares] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  const [player, setPlayer] = useState("X")
  const [message, setMessage] = useState("Player " + player + " : your turn to play")

  function switchPlayer(){
    if (player == "X"){
      setPlayer("O")
    }else setPlayer("X")
  }

  useEffect(()=> {
    setMessage("Player " + player + " : your turn to play")

    //Check if anyone won
    if (calculateWinner(squares) == "X"){
      setMessage("Game Over! Player X won!")
      setTimeout(() => {
        setSquares([" ", " ", " ", " ", " ", " ", " ", " ", " "])
        setMessage("Player X: your turn to play")
      }, 3000);
    }else if (calculateWinner(squares) == "O"){
      setMessage("Game Over! Player O won!")
      setTimeout(() => {
        setSquares([" ", " ", " ", " ", " ", " ", " ", " ", " "])
        setMessage("Player X: your turn to play")
      }, 3000);
    }
  }, [player])

  function fillSquare(squareid:number, currentValue:string){
    if (currentValue == " "){
      var temp = squares
      temp[squareid] = player
      setSquares(temp)
      switchPlayer()
    }else{
    }
  }

  function calculateWinner(squares:Array<String>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }



  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
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
      
    </>
  )
}

export default App
