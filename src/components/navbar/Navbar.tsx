"use client";
import { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { shoppingCartSelect } from "@/redux/cartSlice";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";
import SideCart from "../shoppingcart/SideCart";


export default function Navbar() {
  const shoppingCart = useSelector(shoppingCartSelect);
  const totalQuantity = shoppingCart?.items?.reduce(
    (sum, it) => sum + it.quantity,
    0
  ) ?? 0;

  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; isAdmin: boolean } | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setUser(authService.getUser());
  }, []);

  const handleLogout = () => {
    console.log('🔴 Iniciando logout...');
    // Disparar evento para vaciar el carrito ANTES de hacer logout
    window.dispatchEvent(new Event('user-logged-out'));
    console.log('🔴 Evento user-logged-out disparado');
    
    // Pequeño delay para asegurar que el evento se procese
    setTimeout(() => {
      authService.logout();
      setUser(null);
      router.push('/');
    }, 100);
  };

  return (
    <>
      <div className="w-[80%] mx-auto sticky top-2 z-20 backdrop-blur-md flex flex-row justify-between items-center py-3 px-5 gap-10 m-3 shadow-xl rounded-full">
        <div className="flex flex-row items-center gap-24">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-[18%]" />
          {/* Links */}
          <div className="flex flex-row justify-between gap-10 text-[#768386]">
            <Link href="/" className="cursor-pointer hover:scale-125 transition-all duration-300">Home</Link>
            <Link href="/shop" className="cursor-pointer hover:scale-125 transition-all duration-300">Tienda</Link>
            <Link href="/categories" className="cursor-pointer hover:scale-125 transition-all duration-300">Categorías</Link>
            <Link href="/mis-pedidos" className="cursor-pointer hover:scale-125 transition-all duration-300">Mis Pedidos</Link>
            <Link href="/profile" className="cursor-pointer hover:scale-125 transition-all duration-300">Mi Cuenta</Link>
          </div>
        </div>

        {/* Buttons */}
        <div className=" w-[50%] flex flex-row items-center justify-end gap-5">
          {user ? (
            <>
              {user.isAdmin && (
                <Link href="/admin">
                  <button className="flex items-center gap-2 text-white bg-green-600 rounded-full font-light shadow-lg py-2 px-4 cursor-pointer hover:scale-110 transition-all duration-300">
                    <Settings size={18} />
                    Admin
                  </button>
                </Link>
              )}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="text-[#2f3031] border border-gray-100 rounded-full font-light shadow-lg py-2 px-4 cursor-pointer hover:scale-110 transition-all duration-300"
                >
                  {user.email.split('@')[0]}
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition"
                    >
                      <LogOut size={16} />
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link href="/login">
              <button className="text-[#2f3031] border border-gray-100 rounded-full font-light shadow-lg py-2 px-3 cursor-pointer hover:scale-110 transition-all duration-300">
                Iniciar Sesión
              </button>
            </Link>
          )}
          

          {/* Botón carrito */}
          <button
            type="button"
            className="relative cursor-pointer hover:scale-125 transition-all duration-300"
            onClick={() => setCartOpen(true)}
          >
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 rounded-full text-white text-[0.65rem] flex items-center justify-center font-medium">
                {totalQuantity}
              </span>
            )}
            <HiOutlineShoppingBag size={28} color="#2f3031" />
          </button>
        </div>
      </div>

      {/* SideCart */}
      <SideCart items={shoppingCart.items ?? []} isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

