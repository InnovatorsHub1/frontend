//import GenericButton from '@src/components/Button/GenericButton';
//import { Delete } from '@mui/icons-material';
import { RadioGroup } from '@src/components/form/RadioGroup/RadioGroup';
//import RadioButton from '@src/components/form/RadioGroup/RadioButton';
export default function HomePage() {
  const options = [
    {
      name : 'color',
      value : 'green',
      txtColor : 'red',
      bgColor: 'grey',
    },
    {
      name : 'color',
      value : 'blue',
      txtColor : 'green',
    },
    {
      name : 'color',
      value : 'yellow',
      txtColor : 'blue'
    }
  ]


  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>

        COLOR:
       
       <RadioGroup btnOptions={options} txtColor='text-blue-200' bgColor='bg-black' txtSize='text-lg' margin='m-5' padding='p-6' innerPadding='p-6'/>


      {/* <GenericButton
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
      </GenericButton> */}

      <div className='bg-error dark:bg-dark-primary'>error</div>
    </div>
  );
}
