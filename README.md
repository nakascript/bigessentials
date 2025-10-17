# BigEssentials - JavaScript Exercises Collection

A structured collection of JavaScript/TypeScript exercises with Tailwind CSS styling.

## 🚀 Features

- **TypeScript**: Full TypeScript support with strict type checking
- **Tailwind CSS**: Modern, utility-first CSS framework
- **Modular Structure**: Each exercise in its own folder
- **Testing Ready**: Jest configured for unit testing
- **Live Development**: Auto-reload with live-server
- **Build System**: Automated TypeScript transpilation and CSS processing

## 📁 Project Structure

```
bigessentials/
├── src/
│   ├── exercises/
│   │   ├── exercise-01/    # Variables & Data Types
│   │   ├── exercise-02/    # Functions & Arrow Functions
│   │   └── exercise-03/    # Arrays & Array Methods
│   ├── styles/
│   │   └── main.css        # Tailwind CSS imports
│   ├── index.html          # Main menu
│   └── main.ts             # Main menu logic
├── dist/                   # Compiled output (auto-generated)
├── package.json
├── tsconfig.json
└── tailwind.config.js
```

## 🛠️ Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd bigessentials

# Install dependencies
npm install
```

## 🎮 Usage

### Development Mode

Run the development server with hot-reload:

```bash
npm run dev
```

This command will:

- Watch TypeScript files and compile on changes
- Watch CSS files and rebuild Tailwind styles
- Start a live server at http://localhost:3000

### Build for Production

Compile TypeScript and build optimized CSS:

```bash
npm run build
```

### Run Tests

Execute Jest tests:

```bash
npm run test
```

## 📝 Adding New Exercises

1. **Create a new folder** in `src/exercises/`:

   ```
   src/exercises/exercise-04/
   ```

2. **Add required files**:

   - `index.html` - Exercise page
   - `main.ts` - TypeScript code
   - (optional) `main.test.ts` - Unit tests

3. **Update the menu** in `src/main.ts`:

   ```typescript
   const exercises: Exercise[] = [
     // ... existing exercises
     {
       id: 4,
       title: "Your New Exercise",
       description: "Exercise description",
       difficulty: "Medium",
       path: "./exercises/exercise-04/index.html",
       icon: "🎯",
     },
   ];
   ```

4. **Rebuild** and the exercise will appear in the menu!

## 🧪 Testing

Each exercise can have a corresponding test file:

```typescript
// exercise-01/main.test.ts
import { runExercise } from "./main.js";

describe("Exercise 01", () => {
  it("should complete without errors", () => {
    expect(() => runExercise()).not.toThrow();
  });
});
```

Run tests with:

```bash
npm test
```

### ⚠️ Important: ES6 Module Imports

When using ES6 modules in TypeScript with browser-based projects, always include the `.js` extension in your import paths:

```typescript
// ✅ Correct
import { displayOutput } from "../../utils/display.js";

// ❌ Wrong (won't work in browser)
import { displayOutput } from "../../utils/display";
```

This is required because browsers need the full file path with extension for ES modules to work correctly.

## 🎨 Styling

The project uses Tailwind CSS with custom components defined in `src/styles/main.css`:

- `.exercise-card` - Card styling for exercise items
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style

Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
    }
  },
}
```

## 📚 Available Scripts

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start development server with hot-reload |
| `npm run build`     | Build for production                     |
| `npm run build:css` | Build Tailwind CSS only                  |
| `npm run build:ts`  | Compile TypeScript only                  |
| `npm run watch:css` | Watch CSS changes                        |
| `npm run watch:ts`  | Watch TypeScript changes                 |
| `npm run serve`     | Start live-server                        |
| `npm test`          | Run Jest tests                           |

## 🔧 Configuration Files

- **tsconfig.json**: TypeScript compiler options
- **tailwind.config.js**: Tailwind CSS configuration
- **postcss.config.js**: PostCSS plugins
- **jest.config.js**: Jest testing configuration

## 📖 Learning Path

1. **Exercise 01**: Variables & Data Types
2. **Exercise 02**: Functions & Arrow Functions
3. **Exercise 03**: Arrays & Array Methods
4. **Exercise 04**: Big O Notation & Algorithm Complexity

### 📚 Additional Resources

- **[BIG_O_NOTATION.md](./src/exercises/exercise-04/docs/BIG_O_NOTATION.md)** - Complete reference guide for all time complexities:
  - O(1) - Constant Time ⚡
  - O(log n) - Logarithmic Time 🚀
  - O(n) - Linear Time ✅
  - O(n log n) - Log-Linear Time 👍
  - O(n²) - Quadratic Time ⚠️
  - O(2^n) - Exponential Time ❌
  - O(n!) - Factorial Time 💀
  - Space Complexity concepts
  - Comparison tables and practical examples

## 🤝 Contributing

Feel free to add new exercises, improve existing ones, or enhance the project structure!

## 📄 License

MIT License - see LICENSE file for details

---

Built with ❤️ using TypeScript and Tailwind CSS
