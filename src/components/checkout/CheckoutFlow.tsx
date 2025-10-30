"use client";
import React, { useState } from 'react';
import { ShoppingBag, MapPin, CreditCard, Check, ChevronRight, X, Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem, FormData } from '@/redux/types';
import OrderSummary from './OrderSummary';
import Shipping from './Shipping';
import Payment from './Payment';

interface CheckoutStep {
  id: number;
  name: string;
  icon: React.ReactNode;
}

interface CheckoutFlowProps{
  items: CartItem[]
}

const CheckoutFlow: React.FC<CheckoutFlowProps> = ({ items }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  

  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const steps: CheckoutStep[] = [
    { id: 1, name: 'Resumen', icon: <ShoppingBag size={20} /> },
    { id: 2, name: 'Envío', icon: <MapPin size={20} /> },
    { id: 3, name: 'Pago', icon: <CreditCard size={20} /> },
  ];

  const total = items.reduce((sum, item) => {
    return sum + (parseFloat(item.product.price) * item.quantity);
  }, 0);

  const shipping = 5;
  const finalTotal = total + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePaymentSubmit = async (paymentData: any) => {
    console.log('Datos de pago tokenizados por MP:', paymentData);
    console.log('Datos de envío y contacto del cliente:', formData);

    // --- LÓGICA DE BACKEND ---
    // Aquí es donde harías una llamada a tu servidor (API)
    // para procesar el pago de forma segura usando tu ACCESS_TOKEN.
    // Por ejemplo:
    // await fetch('/api/process-payment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     paymentData, // token, payment_method_id, etc.
    //     shippingInfo: formData,
    //     orderItems: items
    //   })
    // });
    
    // Simulación de éxito para el frontend
    alert('¡Pedido realizado con éxito! 🎉 (Simulación Frontend)');
    // Aquí podrías redirigir a una página de "Gracias por tu compra".
  };

  return (
    <div className="min-h-screen bg-[url('/plant2.png')] bg-cover ">
      {/* Progress Steps */}
        <div className="flex items-center justify-center py-5">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= step.id
                      ? 'bg-green-600 text-white shadow-lg shadow-green-200'
                      : 'bg-white border-2 border-gray-200 text-gray-400'
                  }`}
                >
                  {currentStep > step.id ? <Check size={24} /> : step.icon}
                </div>
                <span className={`mt-3 text-sm font-medium ${
                  currentStep >= step.id ? 'text-green-700' : 'text-gray-400'
                }`}>
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-32 h-1 mx-6 mb-8 rounded-full transition-all duration-300 ${
                  currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Order Summary at Top */}
        <OrderSummary items={items} />


        {/* Main Form Content */}
        <div className=" rounded-3xl shadow-sm border border-green-100 p-8 md:p-12">
          

          {/* Step 2: Shipping */}
          {currentStep === 2 && (
            <Shipping data={formData} handleInputChange={handleInputChange} />
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <Payment 
              items={items}
              shippingInfo={formData}// El costo de envío que definiste
            />
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-12">
            {currentStep > 1 && (
              <button
                onClick={handlePrevStep}
                className="cursor-pointer px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-full hover:scale-90 transition-all duration-300"
              >
                Volver
              </button>
            )}
            {currentStep < 3 && (
              <button
                onClick={handleNextStep}
                className="w-full cursor-pointer px-8 py-4 bg-green-600 text-white rounded-full hover:scale-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-200"
              >
                Continuar
                <ChevronRight size={20} />
              </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CheckoutFlow;