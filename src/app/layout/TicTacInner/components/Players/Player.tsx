import { useState, type ComponentPropsWithoutRef } from "react";
import type { PlayerSymbol } from "../../../../../shared/types/board.type";

type PlayerProps = {
  label: string;
  symbol: PlayerSymbol;
  onChangeName: (playerSymbol: PlayerSymbol, newName: string) => void;
} & ComponentPropsWithoutRef<"li">;

export default function Player({
  label,
  symbol,
  onChangeName,
  ...props
}: PlayerProps) {
  const [playerName, setPlayerName] = useState(label);
  const [isEditing, setIsEditing] = useState(false);

  let editablePlayerName = <p>{playerName}</p>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleClick = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  if (isEditing)
    editablePlayerName = (
      <input
        type="text"
        name="name"
        className="simple-input"
        value={playerName}
        onChange={handleChange}
        required
      />
    );

  return (
    <li {...props}>
      {editablePlayerName}
      <button type="button" className="simple-button" onClick={handleClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
