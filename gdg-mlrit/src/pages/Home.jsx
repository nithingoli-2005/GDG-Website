import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import InstagramSection from "../components/InstagramSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Navbar />
      <HomeHero />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Home;

