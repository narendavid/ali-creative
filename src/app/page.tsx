import Jumbotron from "@/components/sections/Jumbotron";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <Projects />
      <Services />
      <Skills />
    </div>
  );
};

export default Home;