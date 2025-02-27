import Switch from '@src/components/Switch';

export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div className=' bg-dark-primary hover:bg-hover-primary hover:text-pressed-primary'>error</div>
      <Switch />
    </div>
  );
}
