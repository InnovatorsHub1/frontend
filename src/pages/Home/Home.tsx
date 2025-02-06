import Link from '@src/components/Link';

export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <Link to='/redux' className='text-primary dark:text-dark-card'>
        Hello
      </Link>
      <div className='bg-error dark:bg-dark-primary'>error</div>
    </div>
  );
}
