import Link from "next/link";
import { Button, Text } from "@/src/components/ui";

interface IQuizPassed {
  onClose: () => void;
  handleStartOver: () => void;
}

export const QuizPassed = ({ onClose, handleStartOver }: IQuizPassed) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
      <Text as="h2" weight="bold" className="mb-4 text-[28px]">
        Result
      </Text>
      <Text as="p" className="mb-8 text-[20px]">
        Great news! We have the perfect treatment for your hair loss. Proceed to{" "}
        <Link
          href="https://www.manual.co"
          target="__blank"
          className="underline"
        >
          www.manual.co
        </Link>
        , and prepare to say hello to your new hair!
      </Text>
      <div>
        <Button
          onClick={() => {
            handleStartOver();
            onClose();
          }}
          variant="ghost"
        >
          Close
        </Button>
        <Button onClick={handleStartOver} variant="ghost">
          Start Over
        </Button>
      </div>
    </div>
  );
};
