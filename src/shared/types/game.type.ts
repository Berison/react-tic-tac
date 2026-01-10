import type { PlayerSymbol } from "./board.type";

type Square = { row: number; col: number };

interface GameTurn {
  square: Square;
  player: PlayerSymbol;
}

export type GameTurns = GameTurn[];
