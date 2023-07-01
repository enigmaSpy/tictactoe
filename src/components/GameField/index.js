import { GameArea, GameCell ,GameAreaWrapper} from "./styled";
import { useState } from "react";

const GameField = () => {
  const emptyField = Array(9).fill(null);

  const [gameState, setGameState] = useState(emptyField);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const players = { x: "x", o: "o" };
  const [winner, setWinner] = useState(null);
  const [isXMove, setIsXMove] = useState(Math.random() < 0.5);

  const allPossibleCombinations = [
    [0, 1, 2], // 1st row
    [3, 4, 5], // 2nd row
    [6, 7, 8], // 3rd row
    [0, 3, 6], // 1st column
    [1, 4, 7], // 2nd column
    [2, 5, 8], // 3rd column
    [0, 4, 8], // 1st diagonal
    [2, 4, 6], // 2nd diagonal
  ];

  const checkWinner = (gameState) => {
    for (let i = 0; i < allPossibleCombinations.length; i++) {
      const [a, b, c] = allPossibleCombinations[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  const handleGame = (index) => {
    if (gameState[index] === null && !winner && !isGameEnded) {
      const updatedGameState = [...gameState];
      updatedGameState[index] = isXMove ? players.x : players.o;
      setIsXMove((prevIsXMove) => !prevIsXMove);
      setGameState(updatedGameState);

      const gameWinner = checkWinner(updatedGameState);
      if (gameWinner) {
        setWinner(gameWinner);
        setIsGameEnded(true);
      } else if (updatedGameState.every((cell) => cell !== null)) {
        setWinner("draw");
        setIsGameEnded(true);
      }
    }
  };

  return (
    <GameAreaWrapper>
      <GameArea>
        {gameState.map((cell, index) => (
          <GameCell
            key={index}
            onClick={() => {
              handleGame(index);
            }}
          >
            {cell}
          </GameCell>
        ))}
      </GameArea>
      {isGameEnded && (
        <div>
          {winner === "draw" ? (
            <h2>Draw</h2>
          ) : (
            <h2>{winner === players.x ? "X" : "O"} won</h2>
          )}
        </div>
      )}
    </GameAreaWrapper>
  );
};

export default GameField;
