
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-6 max-w-3xl animate-fade-in">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-400">
              Frontend Developer & UI/UX Designer
            </h2>
          </div>
          <p className="text-lg text-slate-300">
            I craft responsive websites where technology meets creativity. 
            With a strong focus on user experience and modern design patterns.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-white text-slate-900 hover:bg-slate-200" asChild>
              <a href="#contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" asChild>
              <a href="#" download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
