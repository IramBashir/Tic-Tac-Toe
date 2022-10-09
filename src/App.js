 
import './App.css';
import { useEffect, useState } from 'react';
import SquareComponent from './SquareComponent.js'
 
const initialState = ["","","","","","","","",""];
 
function App() {
 const [gameState, UpdateGameState] = useState(initialState);
 const [isXChange, updateIsXChange] = useState(false);
 
 const onSquareClicked = (index) =>{
  // debugger;
   let currentGameState = Array.from(gameState);
   currentGameState[index] = isXChange ? "X" : "O" ;
   if (!(gameState[index]  === "X" || gameState[index]  === "O"))
   {
      updateIsXChange (!isXChange);
      UpdateGameState(currentGameState);
    }
    else {
      alert ("Bruh!!!!!!!!!!! you can't")
    }
 }
 useEffect (() => {
   const winner = calculateWinner();
   if (winner)
   {
     alert(`We have our winner: ${winner} `)
     UpdateGameState (initialState)
   }
 }, [gameState])
 
 const calculateWinner = () =>  {
   const lines = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6],
   ];
  
   for (let i = 0; i < lines.length; i++) {
     const [a, b, c] = lines[i];
     if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
       return gameState[a];
     }
   }
   return null;
 }
 return (
  
   <div className="App-header">
     <h className="heading-text">Tic-Tac-Toe in React</h>
     <div className='row jc-center'>
       <SquareComponent className="b-bottom-right" state = {gameState[0]} onClick={() => onSquareClicked (0)}/>
       <SquareComponent className="b-bottom-right" state = {gameState[1]} onClick={() => onSquareClicked (1)}/>
       <SquareComponent className="b-bottom" state = {gameState[2]} onClick={() => onSquareClicked (2)}/>
     </div>
     <div className='row jc-center'>
     <SquareComponent className="b-bottom-right" state = {gameState[3]} onClick={() => onSquareClicked (3)}/>
       <SquareComponent className="b-bottom-right" state = {gameState[4]} onClick={() => onSquareClicked (4)}/>
       <SquareComponent className="b-bottom" state = {gameState[5]} onClick={() => onSquareClicked (5)}/>
     </div>
     <div className='row jc-center'>
       <SquareComponent className="b-right" state = {gameState[6]} onClick={() => onSquareClicked (6)}/>
       <SquareComponent className="b-right" state = {gameState[7]} onClick={() => onSquareClicked (7)}/>
       <SquareComponent state = {gameState[8]} onClick={() => onSquareClicked (8)} />
     </div>
     <button className='clear-button' onClick={()=> UpdateGameState (initialState)}>Clear Game</button>
     <p className='name'>Iram Bashir</p>
   </div>
  
 );
}
 
export default App;
 
