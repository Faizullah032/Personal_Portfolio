export default function SkillsSection() {
    const skills = [
      { name: "JavaScript", icon: "/js.png" },
      { name: "React", icon: "/react.png" },
      { name: "Php", icon: "/php.png" },
      { name: "Tailwind CSS", icon: "/tailwind.png" },
      { name: "Bootstrap", icon: "/bootstrap.png" },
      { name: "Git", icon: "/git.png" },
      { name: "HTML", icon: "/html.png" },
      { name: "CSS", icon: "/css.png" },
    ];
  
    return (
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center shadow-lg rounded-lg p-4">
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                <p className="text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }