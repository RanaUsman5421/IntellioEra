import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import PricingPage from './pages/PricingPage';
import BlogsPage from './pages/BlogsPage';
import FaqPage from './pages/FaqPage';
import DemoPage from './pages/DemoPage';
import ContactPage from './pages/ContactPage';
import GrowthPage from './pages/GrowthPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';
import OverlayLayer from './components/OverlayLayer';
import useIntellioEraExperience from './hooks/useIntellioEraExperience';

export default function App() {
  useIntellioEraExperience();

  return (
    <>
      <Background />
      <Header />
      <main className="content">
        <HomePage />
        <SolutionsPage />
        <PricingPage />
        <BlogsPage />
        <FaqPage />
        <DemoPage />
        <ContactPage />
        <GrowthPage />
        <AboutPage />
        <PrivacyPage />
        <TermsPage />
        <Footer />
      </main>
      <OverlayLayer />
    </>
  );
}
