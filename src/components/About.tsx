import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full animate-pulse"></div>
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Silvanus Machoka"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-emerald-600 shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full-stack web developer with over 1 years of
                  experience creating digital solutions that make a difference.
                  My journey began with a fascination for how things work on the
                  web, and it has evolved into a career dedicated to crafting
                  exceptional user experiences.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I specialize in modern web technologies including React,
                  Vue.js, Node.js, and Python. I love tackling complex problems
                  and turning innovative ideas into functional, beautiful
                  applications.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400">
                      10+
                    </div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400">
                      1+
                    </div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
