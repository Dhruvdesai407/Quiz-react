import React, { useContext } from "react";
import { QuizContext } from "./Quiz-context";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const { quizData, currentQuestion } = useContext(QuizContext);

  if (currentQuestion >= quizData.length) {
    return <Result />;
  } else {
    return <Question />;
  }
};

export default Quiz;