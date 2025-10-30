import { Star } from "lucide-react";

export default function Testimonials(){
    const testimonials = [
    {
      name: "María González",
      text: "Mi piel nunca se había sentido tan suave y radiante. El Stem Cell Face Cream es increíble.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      text: "Productos naturales que realmente funcionan. Noté la diferencia en solo 2 semanas.",
      rating: 5
    },
    {
      name: "Carla Méndez",
      text: "El contorno de ojos redujo mis ojeras visiblemente. Estoy encantada con los resultados.",
      rating: 5
    }
  ];
    return(
        <section id="testimonios" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">
              Lo que dicen <span className="italic font-serif text-green-600">nuestras clientas</span>
            </h2>
            <p className="text-gray-600">Historias reales de transformación</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-medium text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    )
}