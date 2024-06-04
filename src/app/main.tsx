import { Logo } from '#/components/logo.tsx';
import { Tagline } from '#/components/tagline.tsx';
import { Title } from '#/components/title.tsx';

export function App() {
  return (
    <main className='flex h-screen bg-[#2f4858] text-[#daf7dc]'>
      <div className='m-auto'>
        <Title />
        <Tagline />
        <Logo />
      </div>
    </main>
  );
}
