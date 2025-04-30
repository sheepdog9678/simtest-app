import { useState } from "react";
import Header from "../components/Header";
import data from "../data/ex.json";
import { useNavigate } from "react-router-dom";

export type Question = {
  id: string;
  question: string;
  dimension: "EvsI" | "SvsN" | "TvsF" | "JvsP";
  options: {
    text: string;
    type: string;
  }[];
};

function TestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [dimension: string]: string[] }>({});

  const questions: Question[] = data.questions;

  const currentQuestion = questions[currentQuestionIndex];

  const navigate = useNavigate();

  const calculateMBTI = (answers: {
    [dimension: string]: string[];
  }): string => {
    const result = Object.entries(answers).map(([dimension, types]) => {
      const counts = types.reduce((acc, type) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as { [key: string]: number });

      // dimension 예: "EvsI" → [ "E", "I" ]
      const [first, second] = dimension.split("vs");

      return (counts[first] || 0) >= (counts[second] || 0) ? first : second;
    });

    return result.join(""); // 예: "ENFP"
  };

  const handleAnswerClick = (selectedType: string) => {
    const { dimension } = currentQuestion;

    setAnswers((prev) => ({
      ...prev,
      [dimension]: [...(prev[dimension] || []), selectedType],
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      const mbti = calculateMBTI({
        ...answers,
        [dimension]: [...(answers[dimension] || []), selectedType],
      });
      navigate(`/result/${mbti}`);
    }
  };
  return (
    <div className="flex flex-col min-h-[1080px] items-center">
      <Header />
      <div className="mt-20 text-4xl font-semibold ">
        {currentQuestion.question}
      </div>
      <div className="mt-40 flex flex-col gap-4 ">
        {currentQuestion.options.map((option, index) => (
          <button
            className="w-[460px] h-[72px] bg-white rounded-xl font-black text-3xl font-extrabold border-2 border-black border-b-8"
            key={index}
            onClick={() => handleAnswerClick(option.type)}
          >
            <div>{option.text}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TestPage;
