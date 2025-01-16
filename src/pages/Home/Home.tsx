import { Button } from '@mui/material';
import GenericButton from '@src/components/Button/GenericButton';

export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>
     
      <GenericButton 

          variant='primary'
          size='sm'
          iconPosition ='left'
          className='btn-container'     
          type='button'>
          Test
         
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
