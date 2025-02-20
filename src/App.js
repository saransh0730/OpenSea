import "./App.css";
import Queries from "./components/FaqsComponent/Queries";
import Footer from "./components/FooterComponent/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import TrendingMemberships from "./components/MembershipComp/TrendingMemberships";
import NavbarComp from "./components/NavbarComponent/NavbarComp";
import NotableComp from "./components/NotableCollections/NotableComp";
import TrendingPfp from "./components/PfpComponent/TrendingPfp";
import TopCollection from "./components/TopCollectorToday/TopCollection";
import TrendCollection from "./components/TrendingArt/TrendingCollection";
import TrendingGames from "./components/TrendingGamesComp/TrendingGames";
import MusicComponent from "./components/TrendingMusic/MusicComponent";
import PhotoComponent from "./components/TrendingPhotography/PhotoComponent";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <HeroSection />
      <NotableComp />
      <TopCollection />
      <TrendCollection />
      <TrendingGames />
      <TrendingMemberships />
      <MusicComponent />
      <TrendingPfp />
      <PhotoComponent />
      <Queries />
      <Footer />
    </div>
  );
}

export default App;
