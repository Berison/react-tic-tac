import { useState, type ComponentPropsWithoutRef } from "react";

type PlayerProps = {
  label: string;
} & ComponentPropsWithoutRef<"li">;

export default function Player({ label, ...props }: PlayerProps) {
  const [playerName, setPlayerName] = useState(label);
  const [isEditing, setIsEditing] = useState(false);

  let editablePlayerName = <p>{playerName}</p>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
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
      <button
        type="button"
        className="simple-button"
        onClick={() => setIsEditing((editing) => !editing)}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
