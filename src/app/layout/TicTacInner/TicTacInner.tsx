import Board from "../Board/Board";
import Players from "./components/Players/Players";

export default function TicTacInner() {
  return (
    <div className="board-inner">
      <Players />
      <Board />
    </div>
  );
}
