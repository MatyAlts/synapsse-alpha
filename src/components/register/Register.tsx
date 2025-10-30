"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validación de contraseñas
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);
    
    try {
      const response = await authService.register({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password
      });
      
      // Guardar token y usuario
      authService.saveToken(response.token);
      authService.saveUser({ email: response.email, isAdmin: response.isAdmin });
      
      // Disparar evento para recargar carrito
      window.dispatchEvent(new Event('user-logged-in'));
      
      // Redirigir al shop
      router.push('/shop');
    } catch (err: any) {
      setError(err.message || "Error al registrarse. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-[url('/plant.png')] ">
      {/* Background shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-green-200/50 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-200/50 blur-3xl animate-pulse"></div>

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[380px] p-8 rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30"
      >
        <Link href="/" passHref>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer absolute top-0 left-0 p-2 mb-5 rounded-full text-[#b9b5b5] hover:scale-125 transition-all duration-300"
          >
            <GoHome className="text-xl" />
          </motion.button>
        </Link>
        
        <h1 className="text-3xl font-thin text-center text-[#535657] mb-2">
          Crear una Cuenta
        </h1>
        <p className="text-md font-thin text-center text-[#b9b5b5] mb-8">
          ¡Te damos la bienvenida!
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100/20 border border-red-400 rounded-xl text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex items-center gap-3 bg-white/20 px-4 py-3 rounded-xl border border-white/30 focus-within:border-green-400 transition">
            <FiUser className="text-[#b9b5b5] text-lg" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nombre Completo"
              className="w-full bg-transparent text-[#535657] placeholder-[#b9b5b5] focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-white/20 px-4 py-3 rounded-xl border border-white/30 focus-within:border-green-400 transition">
            <FiMail className="text-[#b9b5b5] text-lg" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo Electrónico"
              className="w-full bg-transparent text-[#535657] placeholder-[#b9b5b5] focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 bg-white/20 px-4 py-3 rounded-xl border border-white/30 focus-within:border-green-400 transition">
            <FiLock className="text-[#b9b5b5] text-lg" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className="w-full bg-transparent text-[#535657] placeholder-[#b9b5b5] focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center gap-3 bg-white/20 px-4 py-3 rounded-xl border border-white/30 focus-within:border-green-400 transition">
            <FiLock className="text-[#b9b5b5] text-lg" />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar Contraseña"
              className="w-full bg-transparent text-[#535657] placeholder-[#b9b5b5] focus:outline-none"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="cursor-pointer text-white bg-[#535657] hover:scale-105 transition-all duration-300 font-thin py-3 rounded-xl shadow-lg disabled:opacity-50"
          >
            {loading ? "Registrando..." : "Registrarme"}
          </motion.button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-[#535657]">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/login"
            className="text-[#b9b5b5] hover:underline transition duration-300"
          >
            Iniciar Sesión
          </Link>
        </div>
        
      </motion.div>
    </div>
  );
}