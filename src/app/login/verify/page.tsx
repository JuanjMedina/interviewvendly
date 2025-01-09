'use client';
import { useState, Suspense } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import TimerComp from '@/components/timer';
import { useRouter, useSearchParams } from 'next/navigation';
import { loginEndpoint } from '@/services/login';
import LoadingScreen from '@/components/loadingScreenToken';

type Phone = {
  0: string;
  1: string;
  2: string;
  3: string;
};

function VerificationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phoneParam = searchParams.get('phone') || '';
  const phoneNumber = phoneParam.trim().split(' ')[1];
  const [phone, setPhone] = useState<Phone>({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(phone).some(value => value === '')) {
      setError('Por favor ingresa el código completo');
      return;
    }
    setLoading(true);

    const { accesToken, refreshToken } = await loginEndpoint(
      Number(Object.values(phone).join('')),
    );

    setLoading(false);

    if (accesToken && refreshToken) {
      localStorage.setItem('accessToken', accesToken);
      localStorage.setItem('refreshToken', refreshToken);
      router.push('/dashboard');
      return;
    }

    setError('Código inválido');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return;

    setPhone(prev => ({ ...prev, [index]: value }));
  };

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-md mx-auto px-6">
        <div className="mb-8 text-center mt-16">
          <div
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center 
                         justify-center bg-gray-100"
          >
            <MessageCircle className="w-8 h-8 text-gray-900" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Ingresa el código
          </h2>
          <p className="text-gray-600">Enviado al +57 {phoneNumber}</p>
        </div>
        <form className="space-y-8" onSubmit={handleSubmitForm}>
          <div className="flex justify-between gap-4">
            {[1, 2, 3, 4].map(i => (
              <input
                onChange={e => handleInputChange(e, i - 1)}
                key={i}
                name={`code-${i - 1}`}
                type="text"
                maxLength={1}
                value={phone[(i - 1) as keyof typeof phone]}
                className="w-14 h-14 text-center text-2xl font-bold rounded-lg 
                   border-2 border-gray-200"
              />
            ))}
          </div>

          <p>{error}</p>

          <div className="flex items-center justify-center gap-2 text-gray-600">
            <TimerComp initialMinutes={2} initialSeconds={0} />
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-lg bg-black text-white text-lg 
                     font-medium flex items-center justify-center gap-2"
          >
            <span>Verificar</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            type="button"
            className="w-full py-2 text-center text-gray-900 font-medium"
          >
            Reenviar código
          </button>
        </form>
      </div>
    </div>
  );
}

export default function VerificationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerificationContent />
    </Suspense>
  );
}
