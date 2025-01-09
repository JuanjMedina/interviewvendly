'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ErrorMessage } from '@/components/errorMessage';
import { PhoneInputField } from '@/components/phoneInput';
import { ArrowRight } from 'lucide-react';
import usePhoneNumber from '@/hooks/usePhoneNumber';

const PhoneInput = () => {
  const router = useRouter();
  const { phoneNumber, error, handlePhoneChange, validateAndSubmit } =
    usePhoneNumber();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateAndSubmit(phoneNumber)) {
      router.push(`/login/verify?phone=${phoneNumber}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-6">
        <header className="text-center space-y-2 mb-16 mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">
            Ingresa tu número
          </h2>
          <p className="text-lg text-gray-600">Lo usarás para iniciar sesión</p>
        </header>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-base font-medium text-gray-900">
              Número de teléfono
            </label>
            <PhoneInputField
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="+57 XXX XXX XXXX"
              hasError={!!error}
            />
            <ErrorMessage
              message={error}
              fallbackMessage="Ejemplo: +57 321 123 4567"
            />
          </div>
          <button
            type="submit"
            className="w-full h-14 rounded-lg bg-black text-white text-lg 
                 font-medium flex items-center justify-center gap-2"
          >
            <span>Continuar </span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneInput;
