import { LocaleSwitcher } from '@/features';

export default function HomeLocalized() {
  return (
    <div className='flex flex-row w-full justify-between gap-4 p-4 items-center'>
      <LocaleSwitcher />
    </div>
  );
}
