import type { GameBoard } from "../../../shared/types/board.type";

type BoardProps = {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: GameBoard;
};

export default function Board({ onSelectSquare, board }: BoardProps) {
  return (
    <ol id="game-board" className="grid grid-cols-3 gap-3 w-fit mx-auto mt-5">
      {board.flatMap((row, rowIndex) =>
        row.map((playerSymbol, colIndex) => (
          <li key={`${rowIndex}-${colIndex}`}>
            <button
              type="button"
              className="square-button"
              onClick={() => onSelectSquare(rowIndex, colIndex)}
              disabled={playerSymbol !== null}
            >
              {playerSymbol}
            </button>
          </li>
        ))
      )}
    </ol>
  );
}
