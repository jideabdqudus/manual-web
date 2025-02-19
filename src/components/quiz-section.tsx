"use client";
import {
  Quiz,
  QuizFailed,
  QuizPassed,
  QuizHeader,
} from "@/src/components/quiz";
import React, { useContext } from "react";
import { QuizContext } from "@/src/common/context/QuizContext";
import { QuizContextProps } from "@/src/common/types/context.types";

interface IQuizSection {
  onClose: () => void;
}

export const QuizSection = ({ onClose }: IQuizSection) => {
  const {
    success,
    answers,
    handleBack,
    handleAnswer,
    handleStartOver,
    currentQuestion,
    progressPercentage,
    currentQuestionIndex,
  } = useContext(QuizContext) as QuizContextProps;

  return (
    <div className="fixed inset-0 bg-[#F8F7F6] flex flex-col text-black z-50 overflow-y-auto md:overflow-hidden">
      <QuizHeader onClose={onClose} />
      {success === true ? (
        <QuizPassed onClose={onClose} handleStartOver={handleStartOver} />
      ) : success === false ? (
        <QuizFailed onClose={onClose} handleStartOver={handleStartOver} />
      ) : (
        <Quiz
          answers={answers}
          handleBack={handleBack}
          handleAnswer={handleAnswer}
          currentQuestion={currentQuestion}
          handleStartOver={handleStartOver}
          progressPercentage={progressPercentage}
          currentQuestionIndex={currentQuestionIndex}
        />
      )}
    </div>
  );
};
