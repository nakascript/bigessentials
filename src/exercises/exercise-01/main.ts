/**
 * Exercise 01: Variables & Data Types
 *
 * Topics covered:
 * - Variable declarations (let, const)
 * - Data types (string, number, boolean, array, object)
 * - Type annotations in TypeScript
 */

import { displayOutput } from "../../utils/display.js";

// ============================================
// TODO: Complete the exercises below
// ============================================

// Exercise 1.1: Variable Declarations
// Declare a variable with your name
const myName: string = "Nakashima"; // TODO: Add your name

// Declare a variable with your age
let myAge: number = 0; // TODO: Add your age

// Exercise 1.2: Data Types
const favoriteNumber: number = 42;
const isLearning: boolean = true;
const hobbies: string[] = ["coding", "reading", "gaming"]; // TODO: Add your hobbies

// Exercise 1.3: Objects
interface Person {
  name: string;
  age: number;
  city: string;
}

const person: Person = {
  name: myName,
  age: myAge,
  city: "Your City", // TODO: Add your city
};

// Exercise 1.4: Type Conversions
const numberAsString: string = "123";
const convertedNumber: number = parseInt(numberAsString);

// ============================================
// Display Results
// ============================================

function runExercise(): void {
  displayOutput(`👋 Hello, ${myName}!`);
  displayOutput(`🎂 You are ${myAge} years old`);
  displayOutput(`💖 Your favorite number is ${favoriteNumber}`);
  displayOutput(`📚 Learning TypeScript: ${isLearning}`);
  displayOutput(`🎯 Your hobbies: ${hobbies.join(", ")}`);
  displayOutput(`🏙️ Person object: ${JSON.stringify(person, null, 2)}`);
  displayOutput(
    `🔢 Converted "${numberAsString}" to number: ${convertedNumber}`
  );
  displayOutput(`✅ Type of convertedNumber: ${typeof convertedNumber}`);
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  runExercise();
});

export { runExercise };
