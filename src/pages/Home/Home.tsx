import Link from '@src/components/Link';

export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <Link to='/redux' className='text-red-500' type='secondary'>
        Hello11111§111
      </Link>
      <div className='bg-error dark:bg-dark-primary'>error</div>
    </div>
  );
}
