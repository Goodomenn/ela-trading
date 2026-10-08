import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Header        from "./components/Header.jsx";
import Footer        from "./components/Footer.jsx";
import MobileBottomNav from "./components/MobileBottomNav.jsx";
import HomePage      from "./pages/HomePage.jsx";
import MenuPage      from "./pages/MenuPage.jsx";
import ReservationPage from "./pages/ReservationPage.jsx";
import AboutPage     from "./pages/AboutPage.jsx";
import ContactPage   from "./pages/ContactPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/menu"         element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/contact"      element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  );
}