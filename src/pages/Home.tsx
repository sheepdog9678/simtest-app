import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/test");
  };
  return (
    <div className="flex flex-col min-h-[1080px] items-center">
      <Header />
      <div className="flex flex-col flex-1 justify-end items-center mb-[55px]">
        <button
          onClick={handleStart}
          className="w-[480px] h-[85px] bg-black text-white text-[36px] font-extrabold rounded-full"
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

export default Home;
