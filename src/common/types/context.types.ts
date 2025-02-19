import { QuizQuestions } from "@/src/common/types/data.types";
export type QuizContextProps = {
  answers: {};
  isQuizOpen: boolean;
  success: boolean | null;
  progressPercentage: number;
  currentQuestionIndex: number;
  totalQuestions: number | undefined;
  currentQuestion: QuizQuestions | undefined;
  handleBack: () => void;
  handleStartOver: () => void;
  handleQuizOpen: () => void;
  handleQuizClose: () => void;
  handleAnswer: (value: string | boolean, isRejection: boolean) => void;
};
