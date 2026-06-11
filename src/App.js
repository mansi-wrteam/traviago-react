import BlogSection from './Components/BlogSection';
import DestinationsSection from './Components/DestinationsSection';
import Footer from './Components/Footer';
import HomeSection from './Components/HomeSection';
import Navbar from './Components/Navbar';
import SearchSection from './Components/SearchSection';
import StepsSection from './Components/StepsSection';
import TestimonialSection from './Components/TestimonialSection';
import ToursSection from './Components/ToursSection';
import TrendingSection from './Components/TrendingSection';
import useActiveSection from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection(["home", "destinations", "tours", "footer"]);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />

      <Navbar activeSection={activeSection} />
      <main>
        <HomeSection />
        <SearchSection />
        <DestinationsSection />
        <StepsSection />
        <ToursSection />
        <TrendingSection />
        <TestimonialSection />
        <BlogSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
