/**
 * Exercise 02: Functions & Arrow Functions
 *
 * Topics covered:
 * - Function declarations
 * - Function expressions
 * - Arrow functions
 * - Parameters and return types
 */

import { displayOutput } from "../../utils/display.js";

// ============================================
// TODO: Complete the exercises below
// ============================================

// Exercise 2.1: Function Declaration
function greet(name: string): string {
  return `Hello, ${name}!`; // TODO: Implement greeting
}

// Exercise 2.2: Function with Multiple Parameters
function add(a: number, b: number): number {
  return 0; // TODO: Return the sum of a and b
}

// Exercise 2.3: Arrow Function
const multiply = (a: number, b: number): number => {
  return 0; // TODO: Return the product of a and b
};

// Exercise 2.4: Arrow Function (Short Syntax)
const square = (n: number): number => 0; // TODO: Return n squared

// Exercise 2.5: Function with Default Parameters
function greetWithDefault(name: string = "Guest"): string {
  return `Welcome, ${name}!`;
}

// Exercise 2.6: Higher-Order Function
function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

// Exercise 2.7: Rest Parameters
function sum(...numbers: number[]): number {
  return 0; // TODO: Return the sum of all numbers
}

// ============================================
// Display Results
// ============================================

function runExercise(): void {
  displayOutput("🎯 Function Declarations:");
  displayOutput(greet("TypeScript"));
  displayOutput(`2 + 3 = ${add(2, 3)}`);

  displayOutput("\n⚡ Arrow Functions:");
  displayOutput(`4 * 5 = ${multiply(4, 5)}`);
  displayOutput(`Square of 7 = ${square(7)}`);

  displayOutput("\n🎁 Default Parameters:");
  displayOutput(greetWithDefault());
  displayOutput(greetWithDefault("Developer"));

  displayOutput("\n🎨 Higher-Order Functions:");
  displayOutput(`Apply add: ${applyOperation(10, 20, add)}`);
  displayOutput(`Apply multiply: ${applyOperation(10, 20, multiply)}`);

  displayOutput("\n➕ Rest Parameters:");
  displayOutput(`Sum of 1,2,3,4,5 = ${sum(1, 2, 3, 4, 5)}`);
}

document.addEventListener("DOMContentLoaded", () => {
  runExercise();
});

export { runExercise, greet, add, multiply, square };
