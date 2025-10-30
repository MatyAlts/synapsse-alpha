"use client";
import React, { useState } from 'react';
import { UserProfile } from '@/redux/types';
import ProfileCard from './ProfileCard';
import SecurityCard from './SecurityCard';


const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  const [userProfile, setUserProfile] = useState<UserProfile>({
    firstName: 'María',
    lastName: 'González',
    email: 'maria.gonzalez@email.com',
    phone: '+54 9 11 1234-5678',
    address: 'Av. Corrientes 1234, Piso 5, Depto B',
    city: 'Buenos Aires',
    state: 'CABA',
    zipCode: '1043',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Aquí guardarías en el backend
    console.log('Perfil guardado:', userProfile);
  };

  return (
    <div className="min-h-screen bg-[url('/plant.png')] bg-cover ">
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-4xl font-light text-gray-800 mb-2">Mi Cuenta</h2>
          <p className="text-gray-500 text-xl font-light">Gestiona tu información personal.</p>
        </div>

        {/* Profile Card */}
        <ProfileCard userProfile={userProfile} isEditing={isEditing} setIsEditing={setIsEditing} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile}/>

        {/* Security Card */}
        <SecurityCard />

        {/* Notification Preferences */}
        <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl border border-green-200 p-8 mt-6">
          <p className="text-sm text-green-800 text-center">
            🌿 Mantené tu información actualizada para recibir tus productos sin inconvenientes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;