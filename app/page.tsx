import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Navbar from "@/components/Navbar";
import Ctf from "@/components/Ctf";
import About from "@/components/About";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Visuals from "@/components/Visuals";
import { SplashCursor } from "@/components/ui/splash-cursor";


export default function Home() {
  return (
    <div className="relative">
      
      <main className="relative z-10">
        <section id="home">
        <Navbar items={navItems}/>
          <Hero/>
          <SplashCursor/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="projects">
          <RecentProjects/>
        </section>
        <section id="ctfs">
          <Ctf/>
        </section>
        <section id = 'achievements'>
          <Achievements/>
        </section>
        <section id= 'visuals'>
          <Visuals/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
        <div className="h-6"></div>
        
      </main>
    </div>
  );
}
