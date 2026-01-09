import type { PlayerType } from "../../../../shared/types/player";
import Player from "./Player";

export default function Players() {
  const playersInfo: PlayerType[] = [
    {
      id: "player-1",
      label: "Player X",
    },
    {
      id: "player-2",
      label: "Player O",
    },
  ];

  return (
    <ol className="flex gap-5">
      {playersInfo.map((player) => {
        return (
          <Player key={player.id} label={player.label} className="flex-1" />
        );
      })}
    </ol>
  );
}
