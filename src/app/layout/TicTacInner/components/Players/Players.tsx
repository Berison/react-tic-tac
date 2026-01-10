import type { PlayerSymbol } from "../../../../../shared/types/board.type";
import type { PlayerType } from "../../../../../shared/types/player.type";
import Player from "./Player";

type PlayersProps = {
  isActive: PlayerSymbol;
  onChangeName: (playerSymbol: PlayerSymbol, newName: string) => void;
};

export default function Players({ isActive, onChangeName }: PlayersProps) {
  const playersInfo: PlayerType[] = [
    {
      id: "player-1",
      label: "Player X",
      symbol: "X",
    },
    {
      id: "player-2",
      label: "Player O",
      symbol: "O",
    },
  ];

  return (
    <ol className="flex gap-5">
      {playersInfo.map((player) => {
        return (
          <Player
            key={player.id}
            label={player.label}
            symbol={player.symbol}
            className={`flex flex-1 gap-4 ${
              isActive === player.symbol ? "active-player" : ""
            }`}
            onChangeName={onChangeName}
          />
        );
      })}
    </ol>
  );
}
