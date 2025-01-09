import React from 'react';

interface ErrorMessageProps {
  message: string;
  fallbackMessage: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, fallbackMessage }) => {
  return (
    <p className={`text-sm pl-4 ${message ? 'text-red-500' : 'text-gray-500'}`}>
      {message || fallbackMessage}
    </p>
  );
};
