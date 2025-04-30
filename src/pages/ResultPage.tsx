import Header from "../components/Header";
import { useParams } from "react-router-dom";

function ResultPage() {
  const { mbti } = useParams();
  return (
    <div className="flex flex-col min-h-[1080px] items-center">
      <Header />
      <div className="mt-20 text-4xl font-semibold ">{mbti}</div>
    </div>
  );
}

export default ResultPage;
