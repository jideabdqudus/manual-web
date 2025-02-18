"use client";
import { useContext } from "react";
import { Navbar } from "@/src/components/navbar";
import { Text, Button } from "@/src/components/ui";
import { QuizSection } from "@/src/components/quiz-section";
import { QuizContext } from "@/src/common/context/QuizContext";
import { QuizContextProps } from "@/src/common/types/context.types";
export const HeroSection = () => {
  const { handleQuizOpen, handleQuizClose, isQuizOpen } = useContext(
    QuizContext
  ) as QuizContextProps;
  return (
    <section className="bg-primary min-h-[500px] lg:min-h-[750px] lg:bg-[url('/assets/images/hero-bg.webp')] bg-cover bg-center">
      <div className="container-padding">
        <div>
          <Navbar />
        </div>
        <div className="mt-16 lg:mt-32 max-w-[468px]">
          <Text size="lg" weight="normal" className="text-6xl lg:text-8xl">
            Be good to yourself
          </Text>
          <Text size="lg" weight="light" className="mt-[20px]">
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </Text>
          <Button className="my-8" onClick={handleQuizOpen}>
            TAKE THE QUIZ
          </Button>
        </div>
      </div>
      {isQuizOpen && <QuizSection onClose={handleQuizClose} />}
    </section>
  );
};
