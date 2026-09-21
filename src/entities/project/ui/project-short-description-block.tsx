interface ProjectShortDescriptionBlockProps {
  title: string;
  description: string;
  technologyList: string[];
  listAriaLabel: string;
}
export const ProjectShortDescriptionBlock = ({
  title,
  description,
  technologyList,
  listAriaLabel,
}: ProjectShortDescriptionBlockProps) => {
  return (
    <div className='bg-section-background flex flex-col gap-2 rounded-2xl p-3'>
      <h3 className='text-4xl font-bold'>{title}</h3>

      <p className='text-control-background'>{description}</p>

      <ul className='flex flex-wrap gap-2' aria-label={listAriaLabel}>
        {technologyList.map((techKey) => (
          <li
            key={techKey}
            className='bg-background/90 rounded-full px-3 py-1 text-sm font-medium'
          >
            {techKey}
          </li>
        ))}
      </ul>
    </div>
  );
};
