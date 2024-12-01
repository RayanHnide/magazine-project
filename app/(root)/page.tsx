import AboutUs from "../sections/AboutUs/AboutUs";
import FeaturedArticles from "../sections/Featured Articles/Featured Articles";
import HeroPage from "../sections/HeroPage/HeroPage";
import NewArticles from "../sections/NewArticles/NewArticles";
import VotingSection from "../sections/Voting Section/VotingSection";
import Advertisement from "../sections/ِAdvertisement/Advertisement";

export default function Home() {
  return (
    <>
      <HeroPage />
      <AboutUs />
      <FeaturedArticles />
      <Advertisement />
      <NewArticles />
      <VotingSection />
    </>
  );
}
