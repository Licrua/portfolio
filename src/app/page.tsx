import { Header } from "./components/header/Header";
import FeedbackForm from "./components/main/FeedbackForm";
import HeroSection from "./components/main/HeroSection";
import JobSection from "./components/main/JobSection";
import Main from "./components/main/Main";
import Skills from "./components/main/Skills";
import WorksCarousel from "./components/main/WorksCarousel";
import WorksSection from "./components/main/WorksSection";

export default function Home() {
  return (
	<>
    <Header />
	<Main>
		<HeroSection/>
		<JobSection/>
		<WorksSection/>
		<WorksCarousel/>
		<Skills/>
		<FeedbackForm/>
	</Main>
	</>
  );
}
