import { Camera, Video, Users } from "lucide-react"

const services = [
  { icon: Camera, title: "'Wedding Photography'", description: "'Capture your special day with our professional wedding photography services.'" },
  { icon: Video, title: "'Event Videography'", description: "'High-quality video production for all types of events and occasions.'" },
  { icon: Users, title: "'Portrait Sessions'", description: "'Professional portrait photography for individuals, families, and groups.'" },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="fade-in bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <service.icon className="w-12 h-12 text-gray-700 dark:text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

