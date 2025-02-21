import { Header } from "./components/header/Header";
import HeroSection from "./components/main/HeroSection";
import JobSection from "./components/main/JobSection";
import Main from "./components/main/Main";

export default function Home() {
  return (
	<>
    <Header />
	<Main>
		<HeroSection/>
		<JobSection/>
	</Main>
	</>
  );
}
