import { Lock } from "lucide-react";

export default function SecurityCard(){
    return(
        <div className=" backdrop-blur-sm rounded-3xl shadow-sm border border-green-100 p-8">
          <h3 className="text-xl font-light text-gray-800 mb-6 flex items-center gap-2">
            <Lock size={20} />
            Seguridad
          </h3>
          <button className=" cursor-pointer px-8 py-3 text-green-600 border-2 border-green-200 rounded-full hover:bg-green-50 hover:scale-110 transition-all duration-300 font-medium">
            Cambiar contraseña
          </button>
        </div>
    )
}