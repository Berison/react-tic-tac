import type { GameTurns } from "../../../shared/types/game.type";

type LogProps = {
  turns: GameTurns;
};

export default function Log({ turns }: LogProps) {
  return (
    <ol id="log" className="log-list">
      {turns.map((turn) => (
        <li
          key={`${turn.square.row}-${turn.square.col}`}
          className="log-list-item"
        >
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
