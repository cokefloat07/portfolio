
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-6 max-w-3xl animate-fade-in">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              Frontend Developer & UI/UX Designer
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            I craft responsive websites where technology meets creativity. 
            With a strong focus on user experience and modern design patterns.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <a href="#contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
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
