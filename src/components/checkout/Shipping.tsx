import { FormData } from "@/redux/types";

interface ShippingProps{
  data: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Shipping({data, handleInputChange}: ShippingProps){
    return(
        <div>
              <h2 className="text-3xl font-light text-gray-800 mb-8">¿Dónde lo enviamos?</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={data.firstName}
                      onChange={handleInputChange}
                      className="bg-gradient-to-br from-green-50 to-green-100/50 w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      placeholder="Juan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleInputChange}
                      className="bg-gradient-to-br from-green-50 to-green-100/50 w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      placeholder="Pérez"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleInputChange}
                      className="bg-gradient-to-br from-green-50 to-green-100/50 w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={data.phone}
                      onChange={handleInputChange}
                      className="bg-gradient-to-br from-green-50 to-green-100/50 w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      placeholder="+54 9 11 1234-5678"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección completa
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={handleInputChange}
                    className="bg-gradient-to-br from-green-50 to-green-100/50 w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                    placeholder="Av. Corrientes 1234, Piso 5, Depto B"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={data.city}
                      onChange={handleInputChange}
                      className="bg-gradient-to-br from-green-50 to-green-100/50 w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      placeholder="Buenos Aires"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Provincia
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={data.state}
                      onChange={handleInputChange}
                      className="bg-gradient-to-br from-green-50 to-green-100/50 w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      placeholder="CABA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Código Postal
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={data.zipCode}
                      onChange={handleInputChange}
                      className="bg-gradient-to-br from-green-50 to-green-100/50 w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all"
                      placeholder="1000"
                    />
                  </div>
                </div>
              </div>
            </div>
    )
}