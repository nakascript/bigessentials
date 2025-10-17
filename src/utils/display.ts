/**
 * Display utility functions for exercises
 * Shared across all exercise modules
 */

/**
 * Displays a message in the output div and console
 * @param message - The message to display
 */
export function displayOutput(message: string): void {
  const outputDiv = document.getElementById("output");
  if (outputDiv) {
    const p = document.createElement("p");
    p.textContent = message;
    p.className = "text-gray-800 mb-2";

    // Clear placeholder text on first output
    if (outputDiv.querySelector(".text-gray-500")) {
      outputDiv.innerHTML = "";
    }

    outputDiv.appendChild(p);
  }
  console.log(message);
}

/**
 * Displays a section header with separator lines
 * @param title - The section title
 */
export function displaySection(title: string): void {
  displayOutput(`\n${"=".repeat(60)}`);
  displayOutput(title);
  displayOutput("=".repeat(60));
}

/**
 * Measures execution time of a function and displays the result
 * @param fn - Function to measure
 * @param label - Label for the measurement
 * @returns Execution time in milliseconds
 */
export function measureTime(fn: () => void, label: string): number {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = (end - start).toFixed(4);
  displayOutput(`⏱️  ${label}: ${duration}ms`);
  return parseFloat(duration);
}
