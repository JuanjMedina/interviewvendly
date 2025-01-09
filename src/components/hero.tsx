import Image from 'next/image';
import { Button } from '@/components/ui/button';
import image from '../../public/logo.webp';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold tracking-wide text-primary uppercase">
                Vendly
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                Facilitamos las transacciones digitales
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Somos una empresa de transacciones digitales que busca ayudar a
              los pequeños y medianos empresarios a facilitar sus compras y
              ventas en línea.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <Link href="/login">
                <Button size="lg">Comienza ahora</Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <Image
                className="w-full rounded-lg"
                src={image}
                alt="Vendly en acción"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

