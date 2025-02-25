import { useTranslations } from "next-intl";
import Footer from "./components/footer/Footer";
import Divider from "./components/generic/Divider";
import { Header } from "./components/header/Header";
import FeedbackForm from "./components/main/FeedbackForm";
import HeroSection from "./components/main/HeroSection";
import JobSection from "./components/main/JobSection";
import Main from "./components/main/Main";
import Skills from "./components/main/Skills";
import WorksCarousel from "./components/main/WorksCarousel";
import WorksSection from "./components/main/WorksSection";
import LocaleSwitcher from "./components/generic/LocaleSwitcher";

export default function Home() {
  return (
    <>
      <LocaleSwitcher />
      <Header />
      <Main>
        <HeroSection />
        <Divider />
        <JobSection />
        <Divider />
        <WorksSection />
        <Divider />
        <WorksCarousel />
        <Divider />
        <Skills />
        <Divider />
        <FeedbackForm />
        <Divider />
      </Main>
      <Footer />
    </>
  );
}
