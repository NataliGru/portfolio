import { HeroCTA } from './hero-cta';
import { HeroFlowers } from './hero-flowers';
import { HeroTextBlock } from './hero-text-block';

export const Hero = () => {
  return (
    <section
      className='bg-section-background relative w-full rounded-b-3xl pt-5 md:pt-16'
      aria-labelledby='hero-title'
    >
      <HeroFlowers>
        <div className='flex flex-col items-center justify-center gap-5'>
          <HeroTextBlock />
          <HeroCTA />
        </div>
      </HeroFlowers>
    </section>
  );
};
