import GenericButton from '@src/components/Button';

export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div className=' bg-dark-primary hover:bg-hover-primary hover:text-pressed-primary'>error</div>
      <GenericButton className='bg-blue-500 dark:bg-red-500'>button of mui with tailwind</GenericButton>
    </div>
  );
}
