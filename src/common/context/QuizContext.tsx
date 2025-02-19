"use client";
import { Quiz } from "@/src/common/types/data.types";
import { fetchQuiz } from "@/src/common/data/quiz-data";
import React, { createContext, useEffect, useState } from "react";
import { QuizContextProps } from "@/src/common/types/context.types";

export const QuizContext = createContext({} as QuizContextProps);

export const QuizContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<any>({});
  const [success, setSuccess] = useState<boolean | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const totalQuestions: number | undefined = quiz?.questions?.length;
  const currentQuestion = quiz?.questions[currentQuestionIndex];
  const progressPercentage = totalQuestions
    ? ((currentQuestionIndex + 1) / totalQuestions) * 100
    : 0;

  useEffect(() => {
    const loadQuiz = async () => {
      const fetchedQuiz = await fetchQuiz();
      setQuiz(fetchedQuiz);
    };
    loadQuiz();
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("quiz");
    if (storedData) {
      const { currentIndex, answers } = JSON.parse(storedData);
      setCurrentQuestionIndex(currentIndex);
      setAnswers(answers);
    }
  }, []);

  const handleQuizOpen = () => {
    setIsQuizOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleQuizClose = () => {
    setIsQuizOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleAnswer = (value: string | boolean, isRejection: boolean) => {
    setAnswers((prev: any) => ({
      ...prev,
      [currentQuestionIndex]: value,
    }));

    localStorage.setItem(
      "quiz",
      JSON.stringify({
        currentIndex: currentQuestionIndex,
        answers: { ...answers, [currentQuestionIndex]: value },
      })
    );

    setTimeout(() => {
      if (isRejection) {
        setSuccess(false);
      } else if (currentQuestionIndex < (quiz?.questions.length || 0) - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setSuccess(true);
      }
    }, 800);
  };

  const handleBack = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleStartOver = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setSuccess(null);
    localStorage.removeItem("quiz");
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        totalQuestions,
        answers,
        handleAnswer,
        handleBack,
        handleStartOver,
        success,
        isQuizOpen,
        handleQuizClose,
        handleQuizOpen,
        currentQuestion,
        progressPercentage,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const { Consumer } = QuizContext;
