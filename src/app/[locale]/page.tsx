import { Hero } from '@/widgets/hero';
import { Projects } from '@/widgets/projects';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Hero />

      <Projects />
    </div>
  );
}
