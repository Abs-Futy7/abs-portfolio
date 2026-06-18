import Hero from "@/components/Hero";
import { navItems } from "@/data";
import Navbar from "@/components/Navbar";
import LazySection from "@/components/LazySection";



export default function Home() {
  return (
    <div className="relative">
      
      <main className="relative z-10">
        
        <section id="home">
        <Navbar items={navItems}/>
          <Hero/>
        </section>
        <LazySection id="about" section="About" minHeight="90vh" />
        <LazySection id="projects" section="RecentProjects" minHeight="100vh" />
        <LazySection id="visuals" section="Visuals" minHeight="80vh" />
        <LazySection id="ctfs" section="Ctf" minHeight="80vh" />
        <LazySection id="achievements" section="Achievements" minHeight="80vh" />
        <LazySection id="contact" section="Contact" minHeight="40vh" />
        <div className="h-6"></div>
        
      </main>
    </div>
  );
}
