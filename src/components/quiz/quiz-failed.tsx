import { Button, Text } from "@/src/components/ui";

interface IQuizFailed {
  onClose: () => void;
  handleStartOver: () => void;
}

export const QuizFailed = ({ onClose, handleStartOver }: IQuizFailed) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
      <Text as="h2" weight="bold" className="mb-4 text-[28px]">
        Result
      </Text>
      <Text as="p" className="mb-8 text-[20px]">
        Unfortunately, we are unable to prescribe this medication for you. This
        is because finasteride can alter the PSA levels, which may be used to
        monitor for cancer. You should discuss this further with your GP or
        specialist if you would still like this medication.
      </Text>
      <div>
        <Button onClick={onClose} variant="ghost">
          Close
        </Button>
        <Button onClick={handleStartOver} variant="ghost">
          Start Over
        </Button>
      </div>
    </div>
  );
};
