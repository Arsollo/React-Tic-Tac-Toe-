import { useEffect, useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function App() {
  const [squares, setSquares] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  const [player, setPlayer] = useState("X")
  const [backgroundColor, setBackGroundColor] = useState("whitesmoke")
  const [winnerSquares, setwinnerSquares] = useState([1,1,1])
  const [message, setMessage] = useState("Player " + player + " : your turn to play")
  const [counter, setCounter] = useState(0)
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)


  function switchPlayer(){
    if (player == "X"){
      setPlayer("O")
    }else setPlayer("X")
  }

  //Checking if board is fulll and declare draw!
  useEffect(()=>{
    if(counter >= 9){
      setMessage("Game is draw! Resetting board...")
      setTimeout(() => {
        setSquares([" ", " ", " ", " ", " ", " ", " ", " ", " "])
        setBackGroundColor("whitesmoke")
        setMessage("Player X: your turn to play")
        setCounter(0)
      }, 4000);

    }
  }, [counter])

  //Changing color
  useEffect(()=>{
    document.getElementById("game_squares" + winnerSquares[0])!.style.backgroundColor = backgroundColor
    document.getElementById("game_squares" + winnerSquares[1])!.style.backgroundColor = backgroundColor
    document.getElementById("game_squares" + winnerSquares[2])!.style.backgroundColor = backgroundColor
    // document.getElementById("game_squares1")!.style.backgroundColor = backgroundColor
  }, [backgroundColor])

  useEffect(()=> {
    if(counter >= 9){
      setMessage("Game is draw! Resetting board...")
    }
    else setMessage("Player " + player + " : your turn to play")

    //Check if anyone won
    if (calculateWinner(squares) == "X"){
      setScoreX(scoreX + 1)
      setMessage("Game Over! Player X won!")
      setBackGroundColor("green")
      setTimeout(() => {
        setSquares([" ", " ", " ", " ", " ", " ", " ", " ", " "])
        setMessage("Player X: your turn to play")
        setBackGroundColor("whitesmoke")
      }, 3000);
    }else if (calculateWinner(squares) == "O"){
      setScoreO(scoreO + 1)
      setMessage("Game Over! Player O won!")
      setBackGroundColor("green")
      setTimeout(() => {
        setSquares([" ", " ", " ", " ", " ", " ", " ", " ", " "])
        setBackGroundColor("whitesmoke")
        setMessage("Player X: your turn to play")
      }, 3000);
    }
  }, [player])

  function fillSquare(squareid:number, currentValue:string){
    if (currentValue == " "){
      var temp = squares
      temp[squareid] = player
      setSquares(temp)
      setCounter(counter + 1)
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] != " ") {

        //Register winner squares
        setwinnerSquares([a,b,c])

        return squares[a];
      }
    }
    return null;
  }



  return (
    <>
      <div className='scoreBoard'>
        <h2>Score:</h2>
        <div>X:   {scoreX}</div>
        <div>O:   {scoreO}</div>
      </div>

      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <ButtonGroup size="lg" className="game_squares_group">
        <Button id='game_squares0' onClick={()=> fillSquare(0,squares[0])}>{squares[0]}</Button>
        <Button id='game_squares1' onClick={()=> fillSquare(1,squares[1])}>{squares[1]}</Button>
        <Button id='game_squares2' onClick={()=> fillSquare(2,squares[2])}>{squares[2]}</Button>
      </ButtonGroup>
      <ButtonGroup size="lg" className="game_squares_group">
        <Button id='game_squares3' onClick={()=> fillSquare(3,squares[3])}>{squares[3]}</Button>
        <Button id='game_squares4' onClick={()=> fillSquare(4,squares[4])}>{squares[4]}</Button>
        <Button id='game_squares5' onClick={()=> fillSquare(5,squares[5])}>{squares[5]}</Button>
      </ButtonGroup>
      <ButtonGroup size="lg" className="game_squares_group">
        <Button id='game_squares6' onClick={()=> fillSquare(6,squares[6])}>{squares[6]}</Button>
        <Button id='game_squares7' onClick={()=> fillSquare(7,squares[7])}>{squares[7]}</Button>
        <Button id='game_squares8' onClick={()=> fillSquare(8,squares[8])}>{squares[8]}</Button>
      </ButtonGroup>
      
    </>
  )
}

export default App
