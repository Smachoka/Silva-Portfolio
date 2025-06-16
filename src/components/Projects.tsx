import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Features include product management, shopping cart, and order tracking.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
      liveDemo: "https://demo-ecommerce.com",
      github: "https://github.com/alexjohnson/ecommerce-platform",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: [
        "Vue.js",
        "Express.js",
        "Socket.io",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      liveDemo: "https://taskmaster-demo.com",
      github: "https://github.com/alexjohnson/task-manager",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "An interactive weather application with location-based forecasts, weather maps, and historical data visualization. Responsive design with dark/light theme support.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: [
        "JavaScript",
        "Chart.js",
        "OpenWeather API",
        "CSS3",
        "LocalStorage",
      ],
      liveDemo: "https://weather-dashboard-demo.com",
      github: "https://github.com/alexjohnson/weather-dashboard",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "A comprehensive analytics dashboard for social media managers. Features real-time data visualization, automated reporting, and performance insights.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["React", "D3.js", "Python", "Flask", "Redis"],
      liveDemo: "https://social-analytics-demo.com",
      github: "https://github.com/alexjohnson/social-analytics",
    },
    {
      id: 5,
      title: "Portfolio CMS",
      description:
        "A content management system specifically designed for creative professionals. Features drag-and-drop portfolio builder and client management tools.",
      image: "/placeholder.svg?height=250&width=400",
      technologies: ["TypeScript", "Next.js", "Prisma", "AWS S3", "Stripe"],
      liveDemo: "https://portfolio-cms-demo.com",
      github: "https://github.com/alexjohnson/portfolio-cms",
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-gray-700 border-gray-600 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-emerald-400">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-emerald-900 text-emerald-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    asChild
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-emerald-600 text-emerald-400 hover:bg-emerald-600"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
