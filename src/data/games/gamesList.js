import { employmentGame, studentGame } from "./smartGames";
import employment from "../../imgs/employment.png";
import student from "../../imgs/student.png";

export const gamesList = [
  {
    key: "employment",
    title: "Employment Rights",
    description: "Learn your basic work rights through real-life situations.",
    icon: employment,
    game: employmentGame,
  },
  {
    key: "student",
    title: "Student Rights",
    description: "Learn your educational rights through real-life situations.",
    icon: student,
    game: studentGame,
  },
];
