import {
  QuizContextProvider,
  QuizContext,
} from "@/src/common/context/QuizContext";
import React from "react";
import { render, screen } from "@testing-library/react";
import { fetchQuiz } from "@/src/common/data/quiz-data";

// Mock the fetchQuiz function
jest.mock("../common/data/quiz-data.ts", () => ({
  fetchQuiz: jest.fn(),
}));

describe("QuizContext", () => {
  beforeEach(() => {
    // Reset the mock before each test
    (fetchQuiz as jest.Mock).mockResolvedValue({
      questions: [
        { question: "Question 1", options: [] },
        { question: "Question 2", options: [] },
      ],
    });
  });

  it("provides initial context values", async () => {
    render(
      <QuizContextProvider>
        <QuizContext.Consumer>
          {({ currentQuestionIndex, totalQuestions, isQuizOpen }) => (
            <>
              <div data-testid="current-question-index">
                {currentQuestionIndex}
              </div>
              <div data-testid="total-questions">{totalQuestions}</div>
              <div data-testid="is-quiz-open">
                {isQuizOpen ? "Open" : "Closed"}
              </div>
            </>
          )}
        </QuizContext.Consumer>
      </QuizContextProvider>
    );

    // Wait for the quiz to load
    expect(
      await screen.findByTestId("current-question-index")
    ).toHaveTextContent("0");
    expect(await screen.findByTestId("total-questions")).toHaveTextContent("2");
    expect(await screen.findByTestId("is-quiz-open")).toHaveTextContent(
      "Closed"
    );
  });

  it("handles opening and closing the quiz", async () => {
    render(
      <QuizContextProvider>
        <QuizContext.Consumer>
          {({ handleQuizOpen, handleQuizClose, isQuizOpen }) => (
            <>
              <button onClick={handleQuizOpen}>Open Quiz</button>
              <button onClick={handleQuizClose}>Close Quiz</button>
              <div data-testid="is-quiz-open">
                {isQuizOpen ? "Open" : "Closed"}
              </div>
            </>
          )}
        </QuizContext.Consumer>
      </QuizContextProvider>
    );

    // Initially, the quiz should be closed
    expect(screen.getByTestId("is-quiz-open")).toHaveTextContent("Closed");

    // Open the quiz
    screen.getByText("Open Quiz").click();
    expect(await screen.findByTestId("is-quiz-open")).toHaveTextContent("Open");

    // Close the quiz
    screen.getByText("Close Quiz").click();
    expect(await screen.findByTestId("is-quiz-open")).toHaveTextContent(
      "Closed"
    );
  });

  it("handles answering questions", async () => {
    render(
      <QuizContextProvider>
        <QuizContext.Consumer>
          {({ handleAnswer, success }) => (
            <>
              <button onClick={() => handleAnswer(true, false)}>
                Answer Yes
              </button>
              <button onClick={() => handleAnswer(false, true)}>
                Answer No
              </button>
              <div data-testid="success">
                {success === null
                  ? "Not answered"
                  : success
                  ? "Success"
                  : "Failure"}
              </div>
            </>
          )}
        </QuizContext.Consumer>
      </QuizContextProvider>
    );

    // Initially, no answer has been given
    expect(screen.getByTestId("success")).toHaveTextContent("Not answered");
  });
});
