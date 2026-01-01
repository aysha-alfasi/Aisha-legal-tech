import { studentGame } from "../../data/games/smartGames";
import GameEngine from "./GameEngine";

export default function StudentGame({ onFinish }) {
  return <GameEngine game={studentGame} onFinish={onFinish} />;
}
