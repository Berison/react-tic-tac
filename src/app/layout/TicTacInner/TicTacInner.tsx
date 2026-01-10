import { useState } from "react";
import type { PlayerSymbol } from "../../../shared/types/board.type";
import Board from "../Board/Board";
import Log from "../Log/Log";
import Players from "./components/Players/Players";
import type { GameTurns } from "../../../shared/types/game.type";
import WINNING_COMBINATION from "./winning-combination";
import initialGameBoard from "../Board/initial-board";
import GameOver from "../GameOver/GameOver";

function deriveActivePlayer(gameTurns: GameTurns) {
  const hasTurns = gameTurns.length > 0;
  let currentPlayer: PlayerSymbol = "X";

  if (hasTurns && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

export default function TicTacInner() {
  const [players, setPlayers] = useState<Record<PlayerSymbol, string>>({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState<GameTurns>([]);

  const hasTurns = gameTurns.length > 0;
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn,
      { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATION) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col],
      secondSquareSymbol = gameBoard[combination[1].row][combination[1].col],
      thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns: GameTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handlePlayerNameChange(playerSymbol: PlayerSymbol, newName: string) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [playerSymbol]: newName };
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <div className="board-inner">
      <Players isActive={activePlayer} onChangeName={handlePlayerNameChange} />
      {(winner || hasDraw) && (
        <GameOver winner={winner} onClose={handleRestart} />
      )}
      <Board onSelectSquare={handleSelectSquare} board={gameBoard} />
      {hasTurns && <Log turns={gameTurns} />}
    </div>
  );
}
