
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Social Circle",
      description: "A react based web app showing how we are able to see our mutual connections on social media platforms.",
      image: "/placeholder.svg",
      tags: ["React", "python", "javascript"],
      liveUrl: "#",
      githubUrl: "https://github.com/cokefloat07/socialcircle.git",
    },
    {
      title: "AutoPark",
      description: "An Iot based smart parking system with android app compatibility.",
      image: "/placeholder.svg",
      tags: ["Flutter", "Firebase", "C programing"],
      liveUrl: "#",
      githubUrl: "https://github.com/cokefloat07/autopark.git",
    },
    {
      title: "PDF based Knowledge chatbot",
      description: "A chatbot that uses Regular Expressions to search the given query by user and also can find various pattern.",
      image: "/placeholder.svg",
      tags: ["Python", "HTML","CSS","Django"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects. Each project reflects my skills and experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-video relative bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <a href="#">View All Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
