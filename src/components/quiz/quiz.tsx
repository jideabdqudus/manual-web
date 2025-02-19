import { Button, Text } from "@/src/components/ui";
import { QuizProgressBar, QuizQuestions } from "@/src/components/quiz";
import { QuizQuestions as QuizQuestionsType } from "@/src/common/types/data.types";

interface IQuiz {
  answers: {
    [key: string]: string | boolean;
  };
  handleBack: () => void;
  progressPercentage: number;
  handleStartOver: () => void;
  currentQuestionIndex: number;
  currentQuestion: QuizQuestionsType | undefined;
  handleAnswer: (value: string | boolean, isRejection: boolean) => void;
}
export const Quiz = ({
  progressPercentage,
  currentQuestion,
  handleAnswer,
  handleBack,
  currentQuestionIndex,
  answers,
}: IQuiz) => (
  <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
    <QuizProgressBar progressPercentage={progressPercentage} />
    <Text as="h2" weight="bold" className="mb-4 text-[28px]">
      {currentQuestion?.question}
    </Text>
    <QuizQuestions
      answers={answers}
      handleAnswer={handleAnswer}
      currentQuestion={currentQuestion}
      currentQuestionIndex={currentQuestionIndex}
    />
    <div className="mt-12">
      {currentQuestionIndex > 0 && (
        <Button onClick={handleBack} variant="ghost">
          Back
        </Button>
      )}
    </div>
  </div>
);
