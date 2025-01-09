import { validatePhoneNumber } from '@/lib/validatePhoneNumber';
import { useState } from 'react';

const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
    setError('');
  };

  const validateAndSubmit = (phone: string) => {
    if (!phone) {
      setError('Por favor ingresa un número de teléfono');
      return false;
    }

    if (!validatePhoneNumber(phone)) {
      setError('Ingresa un número válido en formato: +57 XXX XXX XXXX');
      return false;
    }

    return true;
  };

  return {
    phoneNumber,
    error,
    handlePhoneChange,
    validateAndSubmit,
  };
};

export default usePhoneNumber;
