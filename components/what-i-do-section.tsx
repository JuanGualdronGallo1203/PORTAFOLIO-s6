import { Code, Database, Brain, Server, Smartphone, Globe } from "lucide-react"

export function WhatIDoSection() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-[#00D9A3]" />,
      title: "Desarrollo Frontend",
      description:
        "Creación de interfaces modernas y responsivas con React, JavaScript, HTML5, CSS3 y Tailwind CSS para experiencias de usuario excepcionales.",
    },
    {
      icon: <Server className="w-12 h-12 text-[#00D9A3]" />,
      title: "Desarrollo Backend",
      description:
        "Desarrollo de APIs RESTful robustas con Node.js, Express y Python (FastAPI) para aplicaciones escalables y eficientes.",
    },
    {
      icon: <Brain className="w-12 h-12 text-[#00D9A3]" />,
      title: "Integración de IA",
      description:
        "Implementación de modelos de machine learning con TensorFlow, PyTorch y scikit-learn para soluciones inteligentes y predictivas.",
    },
    {
      icon: <Database className="w-12 h-12 text-[#00D9A3]" />,
      title: "Gestión de Bases de Datos",
      description:
        "Diseño y administración de bases de datos SQL (MySQL) y NoSQL (MongoDB) optimizadas para alto rendimiento.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#00D9A3]" />,
      title: "Aplicaciones Web",
      description:
        "Desarrollo de aplicaciones web completas y funcionales utilizando las mejores prácticas y metodologías ágiles (SCRUM).",
    },
    {
      icon: <Globe className="w-12 h-12 text-[#00D9A3]" />,
      title: "Procesamiento de Documentos",
      description:
        "Soluciones de procesamiento inteligente de documentos con IA para extracción y generación de información automatizada.",
    },
  ]

  return (
    <section id="que-hago" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <div className="text-9xl font-bold text-gray-100 absolute left-1/2 transform -translate-x-1/2 -translate-y-12 -z-10">
            SERVICIOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            ¿Qué Hago?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00D9A3]"></span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
