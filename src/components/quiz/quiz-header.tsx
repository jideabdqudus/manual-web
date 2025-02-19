import Link from "next/link";
import Image from "next/image";
import { CloseIcon } from "@/src/components/icons";

interface IQuizHeader {
  onClose: () => void;
}

export const QuizHeader = ({ onClose }: IQuizHeader) => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow mb-8">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/manual-logo.svg"
          alt="Manual Logo"
          width={100}
          height={100}
        />
      </Link>
      <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
        <CloseIcon />
      </button>
    </header>
  );
};
