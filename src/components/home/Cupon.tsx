"use client"
import { ChevronRight, Gift } from "lucide-react";
import { useState } from "react";

export default function Cupon() {
  const [email, setEmail] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setEmail("");
    }
  };
  return (
    <section className="py-5 px-4  relative overflow-hidden bg-white">

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src="/grupoproductos3.png"
                alt="Productos Synapsse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center justify-center w-16 h-16 bg-lime-400 rounded-full mb-6">
                <Gift className="w-8 h-8 text-gray-800" />
              </div>

              <h3 className="text-3xl font-light mb-3">
                ¿Lista para sentir{" "}
                <span className="italic font-serif text-green-600">
                  la diferencia?
                </span>
              </h3>

              <p className="text-gray-600 mb-6">
                Regístrate y recibe un <strong>10% OFF</strong> en tu primera
                compra
              </p>

              <form onSubmit={handleCouponSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-green-500 outline-none transition-all"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-full font-medium hover:from-green-700 hover:to-green-600 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Obtener mi Cupón</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>

              {showSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center animate-fade-in">
                  ¡Tu piel te lo agradecerá! 🌿
                </div>
              )}

              <p className="text-xs text-gray-500 mt-4 text-center">
                *Cupón válido solo en tu primera compra. No aplica con otras
                promociones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
