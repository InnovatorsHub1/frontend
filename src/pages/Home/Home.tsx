import DatePicker from '@src/components/form/DatePicker';

export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>
      <DatePicker label='pick a date' />
      <DatePicker variant='dark' />
    </div>
  );
}
