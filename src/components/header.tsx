'use client';
import Link from 'next/link';
import { Menu, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    router.push('/');
  };

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return (
        <>
          <Link href="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Cerrar sesión
          </Button>
        </>
      );
    }
    return (
      <Link href="/login">
        <Button variant="outline">Iniciar sesión</Button>
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Vendly</span>
              <span className="text-2xl font-bold text-primary">Vendly</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/about"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Acerca de nosotros
                  </Link>
                  <Link
                    href="/products"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Productos
                  </Link>
                  <Link
                    href="/contact"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Contacto
                  </Link>
                  {renderAuthButton()}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Acerca de nosotros
            </Link>
            <Link
              href="/products"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Productos
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contacto
            </Link>
            {renderAuthButton()}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

