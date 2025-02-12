import GenericButton from '@src/components/Button/GenericButton';
import { Delete } from '@mui/icons-material';
import DatePicker from '@src/components/form/DatePicker';
export default function HomePage() {

  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>
    
  <DatePicker 
  label='Departure date' 
  variant='primary'
  // value is default date displayed === actual date.
  // replace value with the state variable to control component
  value={new Date()} 
  // replace log with the setState function to control component
  onChange={(newValue) => console.log(newValue?.toDateString())}
/> 
<DatePicker 
variant='secondary'
value={new Date()} 
onChange={(newValue) => console.log(newValue?.toDateString())}
/>

      <GenericButton
        variant='primary'
        size='sm'
        icon={
          <Delete
            sx={{
              color: 'blue',
              width: '72px', // Explicitly set width
              height: '72px', // Explicitly set height
            }}
          />
        }
        iconPosition='left'
        padding='24px'
        fontSize='24px'
        margin={20}
        type='button'
        isActive={true}
        backgroundColor='green'
        color='red'
      >
        Test222
      </GenericButton>
      <GenericButton
        variant='primary'
        size='sm'
        icon={<Delete />}
        iconPosition='left'
        padding='24px'
        fontSize='24px'
        margin={20}
        type='button'
      >
        Test123
      </GenericButton>
      <GenericButton
        variant='primary'
        size='sm'
        icon={<Delete />}
        iconPosition='left'
        padding='24px'
        fontSize='24px'
        margin={20}
        type='button'
      >
        Test222345
      </GenericButton>

      <GenericButton>Test</GenericButton>

      <br />

      <GenericButton
        variant='primary'
        size='sm'
        icon={
          <Delete
            sx={{
              color: 'blue',
              width: '72px', // Explicitly set width
              height: '72px', // Explicitly set height
            }}
          />
        }
        iconPosition='left'
        padding='24px'
        fontSize='24px'
        margin={20}
        type='button'
        isActive={true}
        backgroundColor='green'
        color='red'
      >
        Test222
      </GenericButton>

      <div className='bg-error dark:bg-dark-primary'>error</div>
    </div>
  );
}
