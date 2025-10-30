"use client"
import { ChevronRight, Gift } from "lucide-react";
import { useEffect, useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Cupon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(null), 4000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleCouponSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRegex.test(email.trim())) {
      setStatus({ type: "error", message: "Ingresá un correo electrónico válido." });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5678/webhook/cupon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        throw new Error("No pudimos procesar tu solicitud en este momento.");
      }

      setStatus({ type: "success", message: "¡Tu cupón está en camino! Revisá tu correo." });
      setEmail("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "No pudimos registrar tu correo.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white/90 rounded-3xl shadow-2xl overflow-hidden">
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

              <h3 className="text-3xl font-light mb-3 text-center md:text-left">
                ¿Lista para sentir{" "}
                <span className="italic font-serif text-green-600">
                  la diferencia?
                </span>
              </h3>

              <p className="text-gray-600 mb-6 text-center md:text-left">
                Registrate y recibí un <strong>10% OFF</strong> en tu primera compra.
              </p>

              <form onSubmit={handleCouponSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status) setStatus(null);
                  }}
                  placeholder="Correo electrónico"
                  className={`w-full px-4 py-3 rounded-full border-2 ${status?.type === "error" ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-green-500'} outline-none transition-all`}
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-full font-medium hover:from-green-700 hover:to-green-600 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Enviando..." : "Obtener mi Cupón"}</span>
                  {!isSubmitting && <ChevronRight className="w-5 h-5" />}
                </button>
              </form>

              {status && (
                <div className={`mt-4 p-4 rounded-lg text-center text-sm ${status.type === "success" ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                  {status.message}
                </div>
              )}

              <p className="text-xs text-gray-500 mt-4 text-center">
                *Cupón válido solo en tu primera compra. No aplica con otras promociones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
