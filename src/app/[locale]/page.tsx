import { Hero, Projects, Skills } from '@/widgets';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Hero />

      <Projects />

      <Skills />
    </div>
  );
}
