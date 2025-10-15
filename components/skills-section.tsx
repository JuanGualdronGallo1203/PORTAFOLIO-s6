export function SkillsSection() {
  const skills = [
    { name: "Python", level: 85 },
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "TypeScript", level: 75 },
    { name: "FastAPI", level: 70 },
    { name: "TensorFlow", level: 65 },
    { name: "PyTorch", level: 60 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mis Habilidades</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#00D9A3] h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
