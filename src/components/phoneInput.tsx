import React from 'react';
import { Phone } from 'lucide-react';

interface PhoneInputFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hasError?: boolean;
}

export const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  value,
  onChange,
  placeholder = '',
  hasError = false,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 
                    rounded-full flex items-center justify-center bg-gray-100"
      >
        <Phone className="w-5 h-5 text-gray-600" />
      </div>
      <input
        type="tel"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`w-full pl-16 pr-4 h-14 rounded-lg border-2 
                    ${hasError ? 'border-red-500' : 'border-gray-200'}
                    text-xl font-medium tracking-wide`}
      />
    </div>
  );
};
