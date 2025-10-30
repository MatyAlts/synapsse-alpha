import { UserProfile } from "@/redux/types"; // Asumo que este tipo está definido en otro lado
import { Edit2, Mail, MapPin, Phone, Save, X } from "lucide-react";
import React from "react";
import Input from "./Input";


interface ProfileCardProps {
    userProfile: UserProfile;
    isEditing: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSaveProfile: () => void;
}

export default function ProfileCard({ userProfile, isEditing, setIsEditing, handleInputChange, handleSaveProfile }: ProfileCardProps) {
    return (
        <div className="backdrop-blur-sm bg-white/50 rounded-3xl shadow-sm border border-green-100 p-8 mb-6">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-light shadow-lg">
                        {/* Agregamos un chequeo por si los valores no existen al inicio */}
                        {userProfile.firstName && userProfile.lastName ? `${userProfile.firstName[0]}${userProfile.lastName[0]}` : '...'}
                    </div>
                    <div>
                        <h3 className="text-2xl font-light text-gray-800">
                            {userProfile.firstName} {userProfile.lastName}
                        </h3>
                        <p className="text-gray-500">{userProfile.email}</p>
                    </div>
                </div>
                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg shadow-green-200"
                    >
                        <Edit2 size={18} />
                        Editar
                    </button>
                ) : (
                    <div className="flex gap-2">
                        <button
                            onClick={handleSaveProfile}
                            className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:scale-95 transition-all duration-300 shadow-lg shadow-green-200"
                        >
                            <Save size={18} />
                            Guardar
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="cursor-pointer flex items-center gap-2 px-4 py-3 bg-gray-200 text-gray-700 rounded-full hover:scale-90 hover:rotate-45 transition-all duration-300"
                        >
                            <X size={18} />
                        </button>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <Input name="firstName" value={userProfile.firstName} isEditing={isEditing} type="text" handleInputChange={handleInputChange} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Apellido</label>
                    <Input name="lastName" value={userProfile.lastName} isEditing={isEditing} type="text" handleInputChange={handleInputChange} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail size={16} className="inline mr-2" /> Email
                    </label>
                    <Input name="email" value={userProfile.email} isEditing={isEditing} type="email" handleInputChange={handleInputChange} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone size={16} className="inline mr-2" /> Teléfono
                    </label>
                    <Input name="phone" value={userProfile.phone} isEditing={isEditing} type="tel" handleInputChange={handleInputChange} />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin size={16} className="inline mr-2" /> Dirección
                    </label>
                    <Input name="address" value={userProfile.address} isEditing={isEditing} type="text" handleInputChange={handleInputChange} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
                    <Input name="city" value={userProfile.city} isEditing={isEditing} type="text" handleInputChange={handleInputChange} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Provincia</label>
                    <Input name="state" value={userProfile.state} isEditing={isEditing} type="text" handleInputChange={handleInputChange} />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Código Postal</label>
                    <Input name="zipCode" value={userProfile.zipCode} isEditing={isEditing} type="text" handleInputChange={handleInputChange} />
                </div>
            </div>
        </div>
    )
}