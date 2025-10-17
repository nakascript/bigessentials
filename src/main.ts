interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  path: string;
  icon: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Variables & Data Types",
    description:
      "Learn about variable declarations, data types, and type conversions",
    difficulty: "Easy",
    path: "./exercises/exercise-01/index.html",
    icon: "📝",
  },
  {
    id: 2,
    title: "Functions & Arrow Functions",
    description:
      "Master function declarations, expressions, and ES6 arrow functions",
    difficulty: "Easy",
    path: "./exercises/exercise-02/index.html",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Arrays & Array Methods",
    description:
      "Explore array manipulation with map, filter, reduce, and more",
    difficulty: "Medium",
    path: "./exercises/exercise-03/index.html",
    icon: "📊",
  },
  {
    id: 4,
    title: "Testing Big O Notation",
    description: "Learn about testing Big O Notation",
    difficulty: "Medium",
    path: "./exercises/exercise-04/index.html",
    icon: "🔍",
  },
];

function getDifficultyColor(difficulty: Exercise["difficulty"]): string {
  const colors = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
  };
  return colors[difficulty];
}

function createExerciseCard(exercise: Exercise): string {
  return `
    <div class="exercise-card">
      <div class="flex items-start justify-between mb-4">
        <span class="text-4xl">${exercise.icon}</span>
        <span class="px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
          exercise.difficulty
        )}">
          ${exercise.difficulty}
        </span>
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-2">
        ${exercise.title}
      </h3>
      <p class="text-gray-600 mb-4">
        ${exercise.description}
      </p>
      <a href="${exercise.path}" class="btn-primary inline-block text-center">
        Start Exercise →
      </a>
    </div>
  `;
}

function renderExercises(): void {
  const container = document.getElementById("exercises-container");
  if (!container) return;

  const exerciseCards = exercises
    .map((exercise) => createExerciseCard(exercise))
    .join("");
  container.innerHTML = exerciseCards;
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderExercises();
});
