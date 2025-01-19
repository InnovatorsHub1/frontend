import { Button } from '@mui/material';
import GenericButton from '@src/components/Button/GenericButton';
import { Delete } from '@mui/icons-material';
export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>
     
      <GenericButton 
          
          variant='primary'
          size='sm'
          icon={<Delete/>}
          iconPosition ='left'
          padding= '24px'
          fontSize= '24px'
          margin={20}
          type='button'
          >
          Test222
         
      </GenericButton>
        
       <br/>
      <Button variant='contained'>Contained</Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#contained-buttons'>
        Link
      </Button>
    </div>
  );
}
