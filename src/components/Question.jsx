import React, { useContext } from "react";
import { QuizContext } from "./Quiz-context";

const Question = () => {
  const {
    quizData,
    currentQuestion,
    setCurrentQuestion,
    userAnswers,
    setAnswerForQuestion,
  } = useContext(QuizContext);

  const questionObj = quizData[currentQuestion];
  const selectedAnswer = userAnswers[currentQuestion];

  const handleOptionClick = (option) => {
    setAnswerForQuestion(currentQuestion, option);
  };

  // Navigate to the previous question if possible
  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // On last question, advancing will trigger the result view
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{questionObj.question}</p>
      {questionObj.options.map((option, index) => (
        <button
          key={index}
          className={"option" + (selectedAnswer === option ? " selected" : "")}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
      <div className="nav-buttons">
        <button onClick={goToPrevious} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
          {currentQuestion === quizData.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default Question;