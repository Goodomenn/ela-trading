import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero.jsx";
import ExperienceStrip from "../components/ExperienceStrip.jsx";
import DiningSection from "../components/DiningSection.jsx";
import LoungeSection from "../components/LoungeSection.jsx";
import EventsSection from "../components/EventsSection.jsx";
import ReviewsSection from "../components/ReviewsSection.jsx";

export default function HomePage() {
  return (
    <>
      <Helmet><title>Bricks Lounge | Fine Dining & VIP Lounge in Miami</title><meta name='description' content='Experience Miami’s premier restaurant and VIP lounge. Reserve your table or bottle service today.'/><link rel='canonical' href='https://www.brickslounge.com/'/></Helmet>
      <Hero />
      <ExperienceStrip />
      <DiningSection />
      <LoungeSection />
      <EventsSection />
      <ReviewsSection />
    </>
  );
}