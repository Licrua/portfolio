// "use client";
// import { useState } from "react";
// import Footer from "./components/footer/Footer";
// import Divider from "./components/generic/Divider";
// import { Header } from "./components/header/Header";
// import FeedbackForm from "./components/main/FeedbackForm";
// import HeroSection from "./components/main/HeroSection";
// import JobSection from "./components/main/JobSection";
// import Main from "./components/main/Main";
// import Skills from "./components/main/Skills";
// import WorksCarousel from "./components/main/WorksCarousel";
// import WorksSection from "./components/main/WorksSection";
// import Greeting from "./components/main/Greeting";

// export default function Home() {
//   const [infoShow, setInfoShown] = useState(false);

//   const handleClick = () => {
// 		setInfoShown(true)
//   };

//   return infoShow ? (
//     <>
//       <Header />
//       <Main>
//         <HeroSection />
//         <Divider />
//         <JobSection />
//         <Divider />
//         <WorksSection />
//         <Divider />
//         <WorksCarousel />
//         <Divider />
//         <Skills />
//         <Divider />
//         <FeedbackForm />
//         <Divider />
//       </Main>
//       <Footer />
//     </>
//   ) : (
//     <Greeting onClick={handleClick} />
//   );
// }

import { redirect } from "next/navigation";

export default function Page() {
  redirect("https://habr.com/ru/companies/click/articles/492258/");
}
