interface QuizProgressBarProps {
  progressPercentage: number;
}

export const QuizProgressBar = ({
  progressPercentage,
}: QuizProgressBarProps) => {
  return (
    <div className="h-2 bg-gray-300 w-full max-w-[200px] mb-6 rounded-md">
      <div
        className="h-full bg-alternate rounded-md transition-all"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};
