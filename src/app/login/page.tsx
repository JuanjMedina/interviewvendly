'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LoginLanding = () => {
  return (
    <div className="min-h-screen bg-white mx-auto mt-40">
      <div className="w-full max-w-md mx-auto px-6">
        <div className="text-center space-y-3 mb-20">
          <h2 className="text-2xl font-semibold text-gray-900">Bienvenido</h2>
          <p className="text-lg text-gray-600">Comienza con tu cuenta</p>
        </div>

        <Link href="login/phone">
          <button
            className="w-full h-14 rounded-lg bg-black text-white text-lg 
                         font-medium flex items-center justify-center gap-2 
                         transition-opacity hover:opacity-90"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>

        <p className="text-sm text-center mt-4">
          ¿No tienes una cuenta?{' '}
          <Link href="/signup">
            <Button variant="outline">Registrarme</Button>
          </Link>
        </p>
        <p className="text-center text-sm mt-6 text-gray-500">
          Al continuar, aceptas nuestros{' '}
          <button className="font-medium text-black">
            Términos y Condiciones
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginLanding;
