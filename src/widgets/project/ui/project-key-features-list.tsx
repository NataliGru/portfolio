import { CircleCheck } from 'lucide-react';

interface ProjectKeyFeaturesList {
  title: string;
  number: string;
  features: string[];
}
export const ProjectKeyFeaturesList = ({
  title,
  number,
  features,
}: ProjectKeyFeaturesList) => {
  return (
    <article className='flex flex-1 flex-col gap-5 rounded-2xl p-3'>
      <div className='flex flex-row items-center gap-2 text-xl font-bold'>
        <p>{number}</p>
        <span className='bg-accent h-px w-10' />
        <h4>{title}</h4>
      </div>

      <ul className='flex flex-col gap-3 text-sm'>
        {features.map((feature, index) => (
          <li
            key={`${title}-${index}`}
            className='text-accent flex items-center gap-1'
          >
            <CircleCheck className='text-accent/50' />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
};
