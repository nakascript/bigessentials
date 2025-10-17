# Big O Notation - Complete Reference Guide

## 📚 Table of Contents

1. [What is Big O Notation?](#what-is-big-o-notation)
2. [Why Does It Matter?](#why-does-it-matter)
3. [Common Time Complexities](#common-time-complexities)
4. [Detailed Breakdown](#detailed-breakdown)
5. [Comparison Table](#comparison-table)
6. [Space Complexity](#space-complexity)
7. [Best Practices](#best-practices)
8. [Quick Reference Chart](#quick-reference-chart)

---

## What is Big O Notation?

Big O notation is a mathematical way to describe how the **runtime** or **space requirements** of an algorithm grow as the input size increases.

### Key Concepts:

- **n** = size of the input
- **Time Complexity** = how long an algorithm takes to run
- **Space Complexity** = how much memory an algorithm uses
- **Worst Case** = Big O usually describes the worst-case scenario

---

## Why Does It Matter?

Understanding Big O helps you:

- ✅ Choose the right algorithm for your problem
- ✅ Predict how your code will perform with large datasets
- ✅ Identify performance bottlenecks
- ✅ Write scalable, efficient code

### Real-World Impact

| Complexity | 10 items | 1,000 items | 1,000,000 items |
| ---------- | -------- | ----------- | --------------- |
| O(1)       | 1ms      | 1ms         | 1ms ✨          |
| O(log n)   | 3ms      | 10ms        | 20ms            |
| O(n)       | 10ms     | 1s          | 16.7 min        |
| O(n²)      | 100ms    | 16.7 min    | 31.7 years 💀   |

---

## Common Time Complexities

### From Best to Worst:

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n) < O(n!)
 ⚡      🚀         ✅       👍          ⚠️        ❌       💀
```

---

## Detailed Breakdown

### 🟢 O(1) - Constant Time

**Definition:** Execution time stays the same regardless of input size.

**Characteristics:**

- Always takes the same amount of time
- Most efficient possible complexity
- Direct access operations

**Examples:**

```typescript
// Array access by index
function getFirstElement(arr: number[]): number {
  return arr[0]; // O(1) - instant access
}

// Object property lookup
function getUserName(user: { name: string }): string {
  return user.name; // O(1)
}

// Arithmetic operations
function add(a: number, b: number): number {
  return a + b; // O(1)
}

// Hash map lookup
const map = new Map();
map.get(key); // O(1)
```

**When You See O(1):**

- Array/object access by key
- Push/pop on stack
- Insert/lookup in hash table
- Variable assignments
- Basic math operations

**Performance:**

```
Input size:     10      100     1,000   10,000   1,000,000
Operations:     1       1       1       1        1
```

---

### 🟢 O(log n) - Logarithmic Time

**Definition:** Execution time grows logarithmically - each step reduces the problem size by a constant factor (usually half).

**Characteristics:**

- Very efficient for large datasets
- Typically involves dividing the problem in half repeatedly
- Common in tree-based and divide-and-conquer algorithms

**Examples:**

```typescript
// Binary search
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1; // Eliminate left half
    } else {
      right = mid - 1; // Eliminate right half
    }
  }

  return -1;
}

// Binary tree operations (balanced)
function searchBST(root: TreeNode, target: number): TreeNode | null {
  if (!root || root.val === target) return root;

  if (target < root.val) {
    return searchBST(root.left, target); // Search left subtree
  } else {
    return searchBST(root.right, target); // Search right subtree
  }
}
```

**When You See O(log n):**

- Binary search
- Balanced binary search tree operations
- Finding elements in sorted arrays
- Some divide-and-conquer algorithms

**Performance:**

```
Input size:     10      100     1,000   10,000   1,000,000
Operations:     3       7       10      13       20
```

**Why It's Fast:**
With 1,000,000 items, binary search only needs ~20 comparisons!

---

### 🔵 O(n) - Linear Time

**Definition:** Execution time grows linearly with input size - if you double the input, you double the time.

**Characteristics:**

- One pass through the data
- Acceptable for most use cases
- Common in simple iterations

**Examples:**

```typescript
// Linear search
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Sum all elements
function sum(arr: number[]): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Find minimum
function findMin(arr: number[]): number {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Array methods
arr.forEach((item) => console.log(item)); // O(n)
arr.map((x) => x * 2); // O(n)
arr.filter((x) => x > 0); // O(n)
arr.reduce((sum, x) => sum + x, 0); // O(n)
```

**When You See O(n):**

- Single loop through array
- Linear search
- Finding min/max
- Counting elements
- Array methods (map, filter, reduce)

**Performance:**

```
Input size:     10      100     1,000   10,000   1,000,000
Operations:     10      100     1,000   10,000   1,000,000
```

---

### 🟡 O(n log n) - Log-Linear Time

**Definition:** Combination of linear and logarithmic - common in efficient sorting algorithms.

**Characteristics:**

- More efficient than O(n²) but slower than O(n)
- Optimal for comparison-based sorting
- Common in divide-and-conquer algorithms

**Examples:**

```typescript
// Merge sort
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Divide
  const right = mergeSort(arr.slice(mid)); // Divide

  return merge(left, right); // Conquer
}

// Quick sort (average case)
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = arr.filter((x, i) => x <= pivot && i < arr.length - 1);
  const right = arr.filter((x) => x > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Heap sort
function heapSort(arr: number[]): number[] {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }
  return arr;
}
```

**When You See O(n log n):**

- Merge sort
- Quick sort (average case)
- Heap sort
- Efficient sorting algorithms

**Performance:**

```
Input size:     10      100     1,000   10,000   1,000,000
Operations:     30      700     10,000  130,000  20,000,000
```

---

### 🟡 O(n²) - Quadratic Time

**Definition:** Execution time grows quadratically - nested loops over the same data.

**Characteristics:**

- Grows very quickly with input size
- Acceptable for small datasets only
- Often indicates nested iterations

**Examples:**

```typescript
// Bubble sort
function bubbleSort(arr: number[]): number[] {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    // n times
    for (let j = 0; j < sorted.length - i - 1; j++) {
      // n times
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
}

// Find all pairs
function findPairs(arr: number[]): number[][] {
  const pairs: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    // n times
    for (let j = i + 1; j < arr.length; j++) {
      // n times
      pairs.push([arr[i], arr[j]]);
    }
  }
  return pairs;
}

// Naive duplicate finding
function findDuplicates(arr: number[]): number[] {
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
```

**When You See O(n²):**

- Nested loops over same data
- Bubble sort, insertion sort, selection sort
- Comparing all pairs
- Naive duplicate detection

**Performance:**

```
Input size:     10      100     1,000      10,000      100,000
Operations:     100     10,000  1,000,000  100,000,000 10,000,000,000
Time:           ~1ms    ~100ms  ~1s        ~100s       ~3 hours
```

**⚠️ Warning:** Avoid O(n²) for large datasets!

---

### 🔴 O(2^n) - Exponential Time

**Definition:** Execution time doubles with each additional input element.

**Characteristics:**

- Extremely slow for large inputs
- Common in recursive solutions with multiple branches
- Often indicates need for optimization (memoization, dynamic programming)

**Examples:**

```typescript
// Naive Fibonacci (exponential)
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2); // Two recursive calls!
}

// Power set (all subsets)
function powerSet(arr: number[]): number[][] {
  if (arr.length === 0) return [[]];

  const first = arr[0];
  const rest = powerSet(arr.slice(1));
  const withFirst = rest.map((subset) => [first, ...subset]);

  return [...rest, ...withFirst];
}

// Tower of Hanoi
function hanoi(n: number, from: string, to: string, aux: string): void {
  if (n === 1) {
    console.log(`Move disk from ${from} to ${to}`);
    return;
  }
  hanoi(n - 1, from, aux, to);
  console.log(`Move disk from ${from} to ${to}`);
  hanoi(n - 1, aux, to, from);
}
```

**When You See O(2^n):**

- Recursive Fibonacci (naive)
- Power set generation
- Solving Tower of Hanoi
- Brute force solutions with binary choices

**Performance:**

```
Input size:     10      20      30      40
Operations:     1,024   1,048,576   1,073,741,824   1,099,511,627,776
Time:           ~1ms    ~1s     ~18 min     ~35 years
```

**💀 Danger Zone:** Even 50 items becomes impractical!

**Optimization:** Use memoization or dynamic programming:

```typescript
// Optimized Fibonacci with memoization - O(n)
function fibonacciMemo(
  n: number,
  memo: Map<number, number> = new Map()
): number {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n)!;

  const result = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  memo.set(n, result);
  return result;
}
```

---

### 🔴 O(n!) - Factorial Time

**Definition:** Execution time grows factorially - every additional element multiplies the time by n.

**Characteristics:**

- Worst possible complexity
- Only practical for very small inputs (< 10)
- Common in permutation/combination problems

**Examples:**

```typescript
// Generate all permutations
function permutations(arr: number[]): number[][] {
  if (arr.length === 0) return [[]];

  const result: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const restPerms = permutations(rest);
    for (const perm of restPerms) {
      result.push([arr[i], ...perm]);
    }
  }
  return result;
}

// Traveling salesman problem (brute force)
function tsp(cities: number[][]): number {
  const n = cities.length;
  let minDistance = Infinity;

  function visit(path: number[], remaining: number[]): void {
    if (remaining.length === 0) {
      const distance = calculateTotalDistance(path, cities);
      minDistance = Math.min(minDistance, distance);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const next = remaining[i];
      const newRemaining = [
        ...remaining.slice(0, i),
        ...remaining.slice(i + 1),
      ];
      visit([...path, next], newRemaining);
    }
  }

  visit(
    [0],
    Array.from({ length: n - 1 }, (_, i) => i + 1)
  );
  return minDistance;
}
```

**When You See O(n!):**

- Generating all permutations
- Traveling salesman problem (brute force)
- N-queens problem (brute force)
- Combinatorial optimization problems

**Performance:**

```
Input size:     5       10      15      20
Operations:     120     3,628,800   1.3 trillion   2.4 quintillion
Time:           ~1ms    ~1s     ~2 weeks    Heat death of universe
```

**💀💀💀 Absolutely Avoid:** Only works for n < 10!

---

## Comparison Table

### Operations by Complexity

| Input Size (n) | O(1) | O(log n) | O(n) | O(n log n) | O(n²) | O(2^n)   | O(n!) |
| -------------- | ---- | -------- | ---- | ---------- | ----- | -------- | ----- |
| 1              | 1    | 1        | 1    | 1          | 1     | 2        | 1     |
| 10             | 1    | 3        | 10   | 30         | 100   | 1,024    | 3.6M  |
| 100            | 1    | 7        | 100  | 700        | 10K   | 1.3×10³⁰ | ∞     |
| 1,000          | 1    | 10       | 1K   | 10K        | 1M    | ∞        | ∞     |
| 10,000         | 1    | 13       | 10K  | 130K       | 100M  | ∞        | ∞     |
| 100,000        | 1    | 17       | 100K | 1.7M       | 10B   | ∞        | ∞     |
| 1,000,000      | 1    | 20       | 1M   | 20M        | 1T    | ∞        | ∞     |

### Rating Guide

| Complexity | Rating       | Use Case            | Example                   |
| ---------- | ------------ | ------------------- | ------------------------- |
| O(1)       | ⚡ Excellent | Always prefer       | Array access, hash lookup |
| O(log n)   | 🚀 Excellent | Large datasets      | Binary search             |
| O(n)       | ✅ Good      | Most cases          | Linear search, iteration  |
| O(n log n) | 👍 Good      | Sorting             | Merge sort, quick sort    |
| O(n²)      | ⚠️ Fair      | Small datasets only | Bubble sort, nested loops |
| O(2^n)     | ❌ Poor      | Very small inputs   | Recursive Fibonacci       |
| O(n!)      | 💀 Terrible  | n < 10 only         | Permutations              |

---

## Space Complexity

Space complexity measures memory usage as input grows.

### O(1) - Constant Space

```typescript
// Only uses a fixed number of variables
function sum(arr: number[]): number {
  let total = 0; // O(1) space
  for (const num of arr) {
    total += num;
  }
  return total;
}
```

### O(n) - Linear Space

```typescript
// Creates a new array proportional to input
function double(arr: number[]): number[] {
  return arr.map((x) => x * 2); // O(n) space
}

// Recursive call stack
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // O(n) call stack space
}
```

### O(n²) - Quadratic Space

```typescript
// 2D matrix
function createMatrix(n: number): number[][] {
  const matrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0); // O(n²) space
  }
  return matrix;
}
```

---

## Best Practices

### ✅ DO:

1. **Analyze your algorithms** before implementing
2. **Use appropriate data structures**:
   - Hash maps for O(1) lookups
   - Binary search for sorted data
   - Trees for hierarchical data
3. **Optimize bottlenecks** identified by Big O analysis
4. **Consider space-time tradeoffs**
5. **Use built-in optimized methods** when available

### ❌ DON'T:

1. **Don't use nested loops** unless necessary (O(n²))
2. **Don't use recursion** without memoization for exponential problems
3. **Don't ignore Big O** when working with large datasets
4. **Don't optimize prematurely** - measure first!

### 🎯 Optimization Strategies

| Problem             | Bad                | Good                   | Improvement                  |
| ------------------- | ------------------ | ---------------------- | ---------------------------- |
| Search sorted array | Linear search O(n) | Binary search O(log n) | ~100x faster for 1000 items  |
| Find duplicates     | Nested loops O(n²) | Hash set O(n)          | ~1000x faster for 1000 items |
| Fibonacci           | Recursive O(2^n)   | Memoization O(n)       | Exponential improvement      |
| Sorting             | Bubble sort O(n²)  | Merge sort O(n log n)  | ~100x faster for 1000 items  |

---

## Quick Reference Chart

### Identify Big O by Code Pattern

```typescript
// O(1) - No loops, direct access
const value = arr[0];
const name = obj.name;

// O(log n) - Divide problem in half each time
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  // ... check and eliminate half
}

// O(n) - Single loop through data
for (let i = 0; i < n; i++) {
  // ... do something
}

// O(n log n) - Efficient sorting
arr.sort((a, b) => a - b);
mergeSort(arr);

// O(n²) - Nested loops
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // ... compare all pairs
  }
}

// O(2^n) - Multiple recursive calls
function fib(n) {
  return fib(n - 1) + fib(n - 2);
}

// O(n!) - Generate all permutations
function perms(arr) {
  // Try every element in every position
}
```

### Common Algorithm Complexities

| Algorithm           | Best       | Average    | Worst      | Space    |
| ------------------- | ---------- | ---------- | ---------- | -------- |
| **Sorting**         |
| Bubble Sort         | O(n)       | O(n²)      | O(n²)      | O(1)     |
| Insertion Sort      | O(n)       | O(n²)      | O(n²)      | O(1)     |
| Selection Sort      | O(n²)      | O(n²)      | O(n²)      | O(1)     |
| Merge Sort          | O(n log n) | O(n log n) | O(n log n) | O(n)     |
| Quick Sort          | O(n log n) | O(n log n) | O(n²)      | O(log n) |
| Heap Sort           | O(n log n) | O(n log n) | O(n log n) | O(1)     |
| **Searching**       |
| Linear Search       | O(1)       | O(n)       | O(n)       | O(1)     |
| Binary Search       | O(1)       | O(log n)   | O(log n)   | O(1)     |
| **Data Structures** |
| Array Access        | O(1)       | O(1)       | O(1)       | -        |
| Array Insert        | O(1)       | O(n)       | O(n)       | -        |
| Hash Table Insert   | O(1)       | O(1)       | O(n)       | -        |
| Hash Table Search   | O(1)       | O(1)       | O(n)       | -        |
| BST Insert          | O(log n)   | O(log n)   | O(n)       | -        |
| BST Search          | O(log n)   | O(log n)   | O(n)       | -        |

---

## 🎓 Key Takeaways

1. **O(1) and O(log n)** are the most efficient - always aim for these when possible
2. **O(n)** is acceptable for most real-world applications
3. **O(n log n)** is optimal for sorting with comparisons
4. **Avoid O(n²)** for datasets larger than a few hundred items
5. **O(2^n) and O(n!)** are only practical for very small inputs
6. **Always consider both time AND space complexity**
7. **Big O describes worst case** - real performance may vary
8. **Use the right data structure** for O(1) operations when possible

---

## 📖 Further Learning

- Practice identifying Big O in code
- Study common algorithms and their complexities
- Learn about amortized analysis
- Understand space-time tradeoffs
- Master optimization techniques (memoization, dynamic programming)

---

## 🔗 Resources

- Exercise 04 in this project demonstrates these concepts with real timing measurements
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- Visualization tools for algorithm complexity
- Algorithm practice platforms (LeetCode, HackerRank)

---

**Created for BigEssentials JavaScript Exercises**  
_See `src/exercises/exercise-04` for practical demonstrations!_
