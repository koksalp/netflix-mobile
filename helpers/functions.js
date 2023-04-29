import {data} from "./data"; 
import { initialProgramLimit } from "./constants";
import { Alert } from "react-native";

export function initProgramsArray(programType ) {
    let count = 0; 

    return data.entries.filter(entry => entry.programType === programType && count++ < initialProgramLimit); 
} 

function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

  
    return array;
} 

export function sortProgramsRandomly(programType) {
    return shuffleArray(data.entries.filter(entry => entry.programType === programType)); 
} 

export function sortProgramsByReleaseYear(programType, asc=true) {
    return data.entries.filter(entry => entry.programType === programType).sort((a, b) => asc ? a.releaseYear - b.releaseYear ||  a.title.localeCompare(b.title) : b.releaseYear - a.releaseYear ||  a.title.localeCompare(b.title)); 
} 

export function searchInPrograms(userInput ) {
    return data.entries.filter(entry => entry.title.toLowerCase().includes(userInput.toLowerCase())); 
} 

export function sortProgramsByScore(programType) {
    return data.entries.filter(entry => entry.programType === programType).sort((a, b) => b.imdbScore - a.imdbScore || a.title.localeCompare(b.title) ); 
}  
