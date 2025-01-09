import Hero from '@/components/hero';
import Features from '@/components/features';
import LoadingScreen from '@/components/4-loading-screen';
import VerificationCode from '@/components/3-verification-code';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <VerificationCode />
    </>
  );
}

