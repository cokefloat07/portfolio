
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["HTML/CSS", "JavaScript", "Python", "Java", "C++"],
    },
    {
      category: "Frameworks",
      skills: ["Django", "Flask", "JDBC","Firebase","ReactJS"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Unity Player", "Blender", "Photoshop", "Figma", "Adobe XD"],
    },
  ];

  return (
    <section id="skills" className="py-16 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <Card key={category.category} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
