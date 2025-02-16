import DatePicker from '@src/components/form/DatePicker';
import { useState } from 'react';
export default function HomePage() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>
    
      <DatePicker
        label='Departure date'
        value={startDate}
        onChange={setStartDate}
      />
      <DatePicker
        variant='secondary'
        value={endDate}
        onChange={setEndDate}
      />

      <div className='bg-error dark:bg-dark-primary'>error</div>
    </div>
  );
}
