
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        < Hero />
        <TechStack />
        <Education />
        <Experience />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
