import GameEngine from "./GameEngine";
import { employmentGame } from "../../data/games/smartGames";

export default function EmploymentGame({ onFinish }) {
  return (
    <GameEngine
      game={employmentGame}
      onFinish={onFinish}
    />
  );
}
