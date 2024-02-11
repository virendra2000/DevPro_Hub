import Footer from "@/components/footer";
import Homepage from "@/components/Homepage";
import About from "@/components/About";
import Domain from "@/components/domain";
import Navbar from "@/components/navbar";
import Skill from "@/components/skill";
import Project from "@/components/project";
export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <About />
      <Domain />
      <Skill />
      <Project />
      <Footer />
    </>
  );
}
