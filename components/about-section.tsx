export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Conóceme Más
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#00D9A3]"></span>
          </h2>
          <div className="text-9xl font-bold text-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-20 -z-10 opacity-50">
            SOBRE MÍ
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Description */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Soy <span className="text-[#00D9A3]">Juan Sebastian Gualdron</span>, Desarrollador Full Stack Jr.
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Desarrollador Junior especializado en Inteligencia Artificial (IA) y Full-Stack, enfocado en crear
              soluciones digitales innovadoras que integren modelos de IA para optimizar procesos y mejorar experiencias
              de usuario.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              En el frontend, destaco en la construcción de interfaces dinámicas y responsivas utilizando React,
              JavaScript, HTML5 y CSS3. En el backend, cuento con experiencia en el desarrollo de APIs RESTful con
              Node.js, Express y Python (FastAPI), integrando modelos de machine learning y gestionando bases de datos
              SQL y NoSQL.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Domino herramientas y bibliotecas clave como TensorFlow, PyTorch y scikit-learn para el desarrollo y
              despliegue de modelos de aprendizaje automático, con un enfoque en procesamiento de lenguaje natural (NLP)
              y análisis predictivo.
            </p>
          </div>

          {/* Right Column - Personal Info */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Nombre:</span>
                  <span className="text-gray-600">Juan Sebastian Gualdron</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Email:</span>
                  <span className="text-[#00D9A3]">juangualdron13@gmail.com</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-700">Edad:</span>
                  <span className="text-gray-600">17</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">De:</span>
                  <span className="text-gray-600">Bucaramanga, Colombia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Horas de Código</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">8+</div>
            <div className="text-gray-600">Tecnologías</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-5xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600">Proyectos</div>
          </div>
        </div>
      </div>
    </section>
  )
}
