import { useState } from "react";

type PlayerSymbol = "X" | "O";
type CellValue = PlayerSymbol | null;
type GameBoard = CellValue[][];

const initialGameBoard: GameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Board() {
  const [gameBoard, updateGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    updateGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  };

  return (
    <ol id="game-board" className="grid grid-cols-3 gap-2 w-fit mx-auto mt-5">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  type="button"
                  className="square-button"
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
