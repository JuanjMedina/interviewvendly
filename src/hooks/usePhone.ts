import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const usePhone = () => {
  const searchParams = useSearchParams();
  const phoneParam = searchParams.get('phone') || '';

  const phoneNumber = phoneParam.trim().split(' ')[1] || '';

  const [phone, setPhone] = useState({
    areaCode: phoneNumber.slice(0, 3),
    prefix: phoneNumber.slice(3, 6),
    lineNumber: phoneNumber.slice(6, 10),
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (value: string, part: string) => {
    setPhone(prevPhone => ({ ...prevPhone, [part]: value }));
    setError('');
  };

  const validatePhoneNumber = () => {
    const { areaCode, prefix, lineNumber } = phone;
    if (!areaCode || !prefix || !lineNumber) {
      setError('Por favor ingresa un número completo.');
      return false;
    }

    const phoneString = `${areaCode}${prefix}${lineNumber}`;
    if (phoneString.length !== 10) {
      setError('El número debe tener 10 dígitos.');
      return false;
    }

    return true;
  };

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return {
    phone,
    error,
    loading,
    handlePhoneChange,
    validatePhoneNumber,
    startLoading,
    stopLoading,
    phoneParam,
  };
};

export default usePhone;
