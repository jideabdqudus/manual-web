import {
  QuizQuestions as QuizQuestionsType,
  Option,
} from "@/src/common/types/data.types";
import { Select } from "@/src/components/ui";

interface QuizQuestionsProps {
  currentQuestion: QuizQuestionsType | undefined;
  currentQuestionIndex: number;
  answers: {
    [key: string]: string | boolean;
  };
  handleAnswer: (value: string | boolean, isRejection: boolean) => void;
}

export const QuizQuestions = ({
  answers,
  currentQuestion,
  handleAnswer,
  currentQuestionIndex,
}: QuizQuestionsProps) => {
  const isChoiceType = currentQuestion?.options.length === 2;
  return (
    <div className="mt-[30px]">
      <div
        className={`grid ${
          isChoiceType ? "grid-cols-1" : "grid-cols-2 lg:grid-cols-3"
        } gap-2 items-center justify-items-center`}
      >
        {currentQuestion?.options.map((option: Option, id: number) => (
          <Select
            key={id}
            option={option}
            isChoiceType={isChoiceType}
            isSelected={answers[currentQuestionIndex] === option.value}
            onChange={() => handleAnswer(option.value, option.isRejection)}
          />
        ))}
      </div>
    </div>
  );
};
