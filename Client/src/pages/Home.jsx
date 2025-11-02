import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";

function Home() {
  const { open } = useOutletContext() || { open: false };

  return (
    <div className="home-page w-full px-4">
      <div className="flex">
        <HeroSection open={open} />
      </div>
    </div>
  );
}

export default Home;
