
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
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
              {/* Replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Your Image Here
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground">
                I'm a passionate developer with 3+ years of experience building web applications.
                I specialize in creating user-friendly interfaces that are both beautiful and functional.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying the outdoors.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-4xl font-bold">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="text-4xl font-bold">20+</div>
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
