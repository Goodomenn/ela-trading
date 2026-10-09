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
      <Helmet>
        <title>Bricks Lounge | Fine Dining, Craft Cocktails & VIP Lounge in Miami</title>
        <meta
          name="description"
          content="Experience Bricks Lounge in Miami. Raw brick walls meet refined cuisine with our chef-curated dining, master mixology, and exclusive VIP bottle service nightlife."
        />
        <meta
          name="keywords"
          content="Bricks Lounge Miami, fine dining Miami, VIP lounge Miami, Miami bottle service, craft cocktails, upscale nightlife, Marco Bellini"
        />
        <link rel="canonical" href="https://www.brickslounge.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Bricks Lounge | Fine Dining, Craft Cocktails & VIP Lounge in Miami" />
        <meta
          property="og:description"
          content="Where raw brick walls meet refined cuisine. Reserve your dining experience or book VIP bottle service today."
        />
        <meta property="og:url" content="https://www.brickslounge.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.brickslounge.com/textures/brick.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bricks Lounge | Fine Dining, Craft Cocktails & VIP Lounge in Miami" />
        <meta
          name="twitter:description"
          content="Where raw brick walls meet refined cuisine. Reserve your dining experience or book VIP bottle service today."
        />
        <meta name="twitter:image" content="https://www.brickslounge.com/textures/brick.jpg" />
      </Helmet>
      <Hero />
      <ExperienceStrip />
      <DiningSection />
      <LoungeSection />
      <EventsSection />
      <ReviewsSection />
    </>
  );
}