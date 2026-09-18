import { Key, ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

interface AboutEntryListProps<T> {
  translationKey: string;
  getKey: (item: T) => Key;
  renderItem: (item: T) => ReactNode;
}

export const AboutEntryList = async <T,>({
  translationKey,
  getKey,
  renderItem,
}: AboutEntryListProps<T>) => {
  const t = await getTranslations(`about.${translationKey}`);
  const items = t.raw('items') as T[];

  return (
    <ul className='flex flex-col gap-6'>
      {items.map((item) => (
        <li
          key={getKey(item)}
          className='bg-background/60 w-full rounded-2xl p-3 shadow-md'
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};
