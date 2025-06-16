import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Vue.js", level: 82 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 83 },
        { name: "MongoDB", level: 78 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Vue.js",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Bootstrap",
    "Tailwind CSS",
    "Express.js",
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {technologies.map((tech, index) => (
            <Badge
              key={tech}
              variant="outline"
              className="px-4 py-2 text-sm border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="bg-gray-800 border-gray-700 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-emerald-400">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-emerald-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${
                              (categoryIndex * 6 + skillIndex) * 0.1
                            }s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
