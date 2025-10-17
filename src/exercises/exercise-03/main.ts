/**
 * Exercise 03: Arrays & Array Methods
 *
 * Topics covered:
 * - Array creation and manipulation
 * - map, filter, reduce
 * - find, some, every
 * - Chaining array methods
 */

import { displayOutput } from "../../utils/display.js";

// ============================================
// Sample Data
// ============================================

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Phone", price: 699, category: "Electronics", inStock: true },
  { id: 3, name: "Desk", price: 299, category: "Furniture", inStock: false },
  { id: 4, name: "Chair", price: 199, category: "Furniture", inStock: true },
  {
    id: 5,
    name: "Keyboard",
    price: 79,
    category: "Electronics",
    inStock: true,
  },
];

// ============================================
// TODO: Complete the exercises below
// ============================================

// Exercise 3.1: Map - Transform product names to uppercase
function getProductNamesUppercase(): string[] {
  return []; // TODO: Use map to transform names
}

// Exercise 3.2: Filter - Get only electronics
function getElectronics(): Product[] {
  return []; // TODO: Use filter to get electronics
}

// Exercise 3.3: Reduce - Calculate total price
function getTotalPrice(): number {
  return 0; // TODO: Use reduce to sum all prices
}

// Exercise 3.4: Find - Get first product over $500
function getExpensiveProduct(): Product | undefined {
  return undefined; // TODO: Use find
}

// Exercise 3.5: Some - Check if any product is out of stock
function hasOutOfStock(): boolean {
  return false; // TODO: Use some
}

// Exercise 3.6: Every - Check if all products have prices > $50
function allExpensive(): boolean {
  return false; // TODO: Use every
}

// Exercise 3.7: Chaining - Get names of in-stock electronics under $700
function getAffordableElectronicsNames(): string[] {
  return []; // TODO: Chain filter and map
}

// ============================================
// Display Results
// ============================================

function runExercise(): void {
  displayOutput("📦 Original Products:");
  displayOutput(JSON.stringify(products, null, 2));

  displayOutput("\n🔤 Product Names (Uppercase):");
  displayOutput(JSON.stringify(getProductNamesUppercase(), null, 2));

  displayOutput("\n💻 Electronics Only:");
  displayOutput(JSON.stringify(getElectronics(), null, 2));

  displayOutput("\n💰 Total Price of All Products:");
  displayOutput(`$${getTotalPrice()}`);

  displayOutput("\n💎 First Expensive Product (>$500):");
  displayOutput(JSON.stringify(getExpensiveProduct(), null, 2));

  displayOutput("\n📭 Has Out of Stock Items:");
  displayOutput(`${hasOutOfStock()}`);

  displayOutput("\n💵 All Products > $50:");
  displayOutput(`${allExpensive()}`);

  displayOutput("\n🎯 Affordable In-Stock Electronics:");
  displayOutput(JSON.stringify(getAffordableElectronicsNames(), null, 2));
}

document.addEventListener("DOMContentLoaded", () => {
  runExercise();
});

export {
  runExercise,
  getProductNamesUppercase,
  getElectronics,
  getTotalPrice,
  getExpensiveProduct,
  hasOutOfStock,
  allExpensive,
  getAffordableElectronicsNames,
};
