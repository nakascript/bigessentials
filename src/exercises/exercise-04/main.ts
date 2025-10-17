/**
 * Exercise 04: Big O Notation & Algorithm Complexity
 *
 * Topics covered:
 * - Time complexity analysis
 * - O(1), O(n), O(n²), O(log n)
 * - Space complexity
 * - Algorithm performance measurement
 */

import {
  displayOutput,
  displaySection,
  measureTime,
} from "../../utils/display.js";

// ============================================
// O(1) - Constant Time
// ============================================

function constantTime(arr: number[]): number {
  // Accessing an element by index is O(1)
  return arr[0];
}

function exampleO1(): void {
  displaySection("🟢 O(1) - CONSTANT TIME");
  displayOutput(
    "Description: Operations that take the same time regardless of input size"
  );
  displayOutput(
    "Examples: Array access, object property lookup, arithmetic operations"
  );

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  displayOutput(`\nArray: [${array.join(", ")}]`);

  measureTime(() => {
    const result = constantTime(array);
    displayOutput(`First element: ${result}`);
  }, "O(1) operation");

  displayOutput("✅ Time complexity: O(1) - Always takes the same time!");
}

// ============================================
// O(n) - Linear Time
// ============================================

function linearSearch(arr: number[], target: number): number {
  // Searching through an array is O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

function sumArray(arr: number[]): number {
  // Summing all elements is O(n)
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function exampleOn(): void {
  displaySection("🔵 O(n) - LINEAR TIME");
  displayOutput("Description: Operations that scale linearly with input size");
  displayOutput(
    "Examples: Iterating through an array, linear search, finding min/max"
  );

  const array = Array.from({ length: 1000 }, (_, i) => i + 1);
  displayOutput(`\nArray size: ${array.length} elements`);

  measureTime(() => {
    const index = linearSearch(array, 750);
    displayOutput(`Found 750 at index: ${index}`);
  }, "Linear search");

  measureTime(() => {
    const sum = sumArray(array);
    displayOutput(`Sum of all elements: ${sum}`);
  }, "Array sum");

  displayOutput("✅ Time complexity: O(n) - Time grows with array size");
}

// ============================================
// O(n²) - Quadratic Time
// ============================================

function bubbleSort(arr: number[]): number[] {
  // Nested loops make this O(n²)
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
}

function findDuplicates(arr: number[]): number[] {
  // Nested loops checking each pair
  const duplicates: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

function exampleOn2(): void {
  displaySection("🟡 O(n²) - QUADRATIC TIME");
  displayOutput("Description: Operations with nested iterations over the data");
  displayOutput("Examples: Bubble sort, nested loops, naive duplicate finding");

  const unsorted = [64, 34, 25, 12, 22, 11, 90, 88, 45, 50];
  displayOutput(`\nOriginal: [${unsorted.join(", ")}]`);

  measureTime(() => {
    const sorted = bubbleSort(unsorted);
    displayOutput(`Sorted:   [${sorted.join(", ")}]`);
  }, "Bubble sort (O(n²))");

  const withDups = [1, 2, 3, 2, 4, 5, 3, 6, 1, 7];
  displayOutput(`\nArray with duplicates: [${withDups.join(", ")}]`);

  measureTime(() => {
    const dups = findDuplicates(withDups);
    displayOutput(`Duplicates found: [${dups.join(", ")}]`);
  }, "Find duplicates (O(n²))");

  displayOutput("⚠️  Time complexity: O(n²) - Time grows exponentially!");
}

// ============================================
// O(log n) - Logarithmic Time
// ============================================

function binarySearch(arr: number[], target: number): number {
  // Binary search is O(log n)
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function exampleOLogN(): void {
  displaySection("🟢 O(log n) - LOGARITHMIC TIME");
  displayOutput(
    "Description: Operations that cut the problem size in half each step"
  );
  displayOutput("Examples: Binary search, balanced tree operations");

  const sortedArray = Array.from({ length: 10000 }, (_, i) => i + 1);
  displayOutput(`\nSorted array size: ${sortedArray.length} elements`);

  const target = 7532;
  measureTime(() => {
    const index = binarySearch(sortedArray, target);
    displayOutput(`Binary search found ${target} at index: ${index}`);
  }, "Binary search (O(log n))");

  measureTime(() => {
    const index = linearSearch(sortedArray, target);
    displayOutput(`Linear search found ${target} at index: ${index}`);
  }, "Linear search (O(n)) for comparison");

  displayOutput("✅ Binary search is MUCH faster than linear search!");
}

// ============================================
// Performance Comparison
// ============================================

function performanceComparison(): void {
  displaySection("📊 PERFORMANCE COMPARISON");

  const sizes = [100, 500, 1000];

  displayOutput("Comparing O(n) vs O(n²) with different input sizes:\n");

  sizes.forEach((size) => {
    const array = Array.from({ length: size }, (_, i) => i + 1);

    displayOutput(`\nInput size: ${size}`);

    const linearTime = measureTime(() => {
      sumArray(array);
    }, "  O(n) - Linear");

    const quadraticTime = measureTime(() => {
      bubbleSort(array.slice(0, Math.min(size, 100)));
    }, "  O(n²) - Quadratic");

    const ratio = (quadraticTime / linearTime).toFixed(2);
    displayOutput(`  Ratio (n²/n): ${ratio}x slower`);
  });

  displayOutput("\n💡 Notice: O(n²) gets exponentially slower as input grows!");
}

// ============================================
// Space Complexity Examples
// ============================================

function spaceComplexityDemo(): void {
  displaySection("💾 SPACE COMPLEXITY");

  displayOutput("O(1) - Constant Space:");
  displayOutput("  Using only a few variables regardless of input size");

  displayOutput("\nO(n) - Linear Space:");
  displayOutput("  Creating a new array or object proportional to input");

  const n = 5;
  displayOutput(`\nExample: Creating array of size ${n}`);

  // O(n) space
  const array = new Array(n).fill(0);
  displayOutput(`Array created: [${array.join(", ")}]`);
  displayOutput("Space complexity: O(n)");
}

// ============================================
// Main Exercise Runner
// ============================================

function runExercise(): void {
  displayOutput("🚀 Starting Big O Notation Analysis...\n");

  exampleO1();
  exampleOn();
  exampleOn2();
  exampleOLogN();
  performanceComparison();
  spaceComplexityDemo();
  logItems(10);

  displayOutput("\n" + "=".repeat(60));
  displayOutput("✅ Exercise Complete!");
  displayOutput("=".repeat(60));
  displayOutput("\n💡 Key Takeaways:");
  displayOutput("  1. O(1) and O(log n) are most efficient");
  displayOutput("  2. O(n) is acceptable for most cases");
  displayOutput("  3. Avoid O(n²) for large datasets");
  displayOutput("  4. Always consider both time AND space complexity");
}

function logItems(n: number) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  runExercise();
});

export {
  runExercise,
  constantTime,
  linearSearch,
  bubbleSort,
  binarySearch,
  logItems,
};
