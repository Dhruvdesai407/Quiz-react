import React from "react";
import { QuizProvider } from "./components/Quiz-context";
import Quiz from "./components/Quiz";

function App() {
  return (
    <QuizProvider>
      <div className="app-container">
        <h1>Quiz App</h1>
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;