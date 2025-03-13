import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import myImage from "@/assets/myimage.png";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know more about me, my background, and what motivates me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square relative overflow-hidden rounded-xl bg-muted">
            <img src={myImage} alt="My Image" className="w-full h-full object-cover" />

            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground">
              "As a passionate developer, I thrive on solving complex problems and continuously expanding my knowledge. I am always eager to learn new technologies, improve my skills, and push the boundaries of innovation to create impactful solutions."
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, playing football and video games,
                or enjoying movies and webseries.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-4xl font-bold">2+</div>
                    <div className="text-sm text-muted-foreground">Paper Published (Scopus)</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="text-4xl font-bold">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
              </div>

              <Button variant="outline" className="w-fit">
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
