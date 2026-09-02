import { HeroCTA } from './hero-cta';
import { HeroFlowers } from './hero-flowers';
import { HeroTextBlock } from './hero-text-block';

export const Hero = () => {
  return (
    <section className='w-full relative pt-5 md:pt-16 bg-section-background'>
      <HeroFlowers>
        <div className='flex flex-col items-center justify-center gap-5'>
          <HeroTextBlock />
          <HeroCTA />
        </div>
      </HeroFlowers>
    </section>
  );
};
