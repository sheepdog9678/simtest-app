import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <header className="w-full h-[50px] flex items-center justify-between bg-white p-3">
      <button>
        <MenuIcon className="w-6 h-6" />
      </button>
      <button onClick={handleHome}>
        <h1 className="text-2xl font-bold">심테</h1>
      </button>
      <button>
        <PersonIcon className="w-6 h-6" />
      </button>
    </header>
  );
}

export default Header;
