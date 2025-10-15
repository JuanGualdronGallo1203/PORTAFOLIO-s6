import { GraduationCap, Briefcase } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          <div className="text-9xl font-bold text-gray-100 absolute left-1/2 transform -translate-x-1/2 -translate-y-12 -z-10">
            RESUMEN
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Currículum
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00D9A3]"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-[#00D9A3]" />
              <h3 className="text-2xl font-bold text-gray-900">Educación</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-[#00D9A3]">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00D9A3] rounded-full"></div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <span className="inline-block px-3 py-1 bg-[#00D9A3] text-white text-sm rounded-full mb-3">2025</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Técnico en Desarrollo de Software</h4>
                  <p className="text-gray-600 mb-2">Campuslands</p>
                  <p className="text-gray-500">
                    Formación técnica especializada en desarrollo de software full-stack con énfasis en tecnologías
                    modernas y metodologías ágiles.
                  </p>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-gray-300">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <span className="inline-block px-3 py-1 bg-gray-400 text-white text-sm rounded-full mb-3">2024</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Bachiller Técnico en Asistencia Administrativa
                  </h4>
                  <p className="text-gray-600 mb-2">Colegio Integrado Nuestra Señora De Las Mercedes</p>
                  <p className="text-gray-500">Lebrija, Santander</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-[#00D9A3]" />
              <h3 className="text-2xl font-bold text-gray-900">Experiencia</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-[#00D9A3]">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00D9A3] rounded-full"></div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <span className="inline-block px-3 py-1 bg-[#00D9A3] text-white text-sm rounded-full mb-3">2025</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Procesador de Documentos con IA</h4>
                  <p className="text-gray-600 mb-2">Desarrollo Freelancer</p>
                  <p className="text-gray-500 mb-3">
                    Aplicación web full-stack que procesa archivos PDF utilizando inteligencia artificial para extraer
                    información y presentarla en tablas estructuradas. Permite la generación de documentos en múltiples
                    formatos (Word, PowerPoint, Excel).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">FastAPI</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Tailwind</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">MySQL</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-[#00D9A3]">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#00D9A3] rounded-full"></div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <span className="inline-block px-3 py-1 bg-[#00D9A3] text-white text-sm rounded-full mb-3">2025</span>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Gestor de Tienda de Videojuegos</h4>
                  <p className="text-gray-600 mb-2">Desarrollo Freelancer</p>
                  <p className="text-gray-500 mb-3">
                    Sistema de gestión completo para tienda de videojuegos con funcionalidades de inventario, ventas,
                    usuarios y reportes. Interfaz intuitiva y base de datos NoSQL para escalabilidad.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Node.js</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Express</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">HTML</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">CSS</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">JavaScript</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
