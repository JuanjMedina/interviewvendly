import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useAuthRedirect = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken || accessToken === '' || accessToken === null) {
          router.push('/login');
          return;
        }
      } catch (error) {
        router.push('/login/phone');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  return { isLoading };
};
