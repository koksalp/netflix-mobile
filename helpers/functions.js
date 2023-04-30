import { data } from "./data";
import { initialProgramLimit } from "./constants";
import { Alert } from "react-native";

// return array of contents that match with the given program type and
// limit them with the number of whatever the value of initialProgramLimit is
export function initProgramsArray(programType) {
  let count = 0;

  return data.entries.filter(
    (entry) =>
      entry.programType === programType && count++ < initialProgramLimit
  );
}

// shuffle given array
// this function has been taken directly from stackoverflow
// url: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// sort programs with the given program type randomly
export function sortProgramsRandomly(programType) {
  return shuffleArray(
    data.entries.filter((entry) => entry.programType === programType)
  );
}

// sort programs by old/new
export function sortProgramsByReleaseYear(programType, asc = true) {
  return data.entries
    .filter((entry) => entry.programType === programType)
    .sort((a, b) =>
      asc
        ? a.releaseYear - b.releaseYear || a.title.localeCompare(b.title)
        : b.releaseYear - a.releaseYear || a.title.localeCompare(b.title)
    );
}

// return all the programs that match with the given input
// regardless of the program type which means that
// returned array may contain both categories (both movies and TV series)
export function searchInPrograms(userInput) {
  return data.entries.filter((entry) =>
    entry.title.toLowerCase().includes(userInput.toLowerCase())
  );
}

// sort programs by their imdb score
export function sortProgramsByScore(programType) {
  return data.entries
    .filter((entry) => entry.programType === programType)
    .sort(
      (a, b) => b.imdbScore - a.imdbScore || a.title.localeCompare(b.title)
    );
}

// create an alert
export function createAlert(title, message) {
  return Alert.alert(title, message, [
    {
      text: "Tamam",
    },
  ]);
}
