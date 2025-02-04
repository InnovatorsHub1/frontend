import { Button } from '@mui/material';
import GenericButton from '@src/components/Button/GenericButton';
import { Delete } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Form from '@src/components/form/Form';

export default function HomePage() {

  //TODO: remove in the end --------------------------------
  const options = [
    { label: "Option 1", value: "1", group: "Group A" },
    { label: "Option 2", value: "2", group: "Group A" },
    { label: "Option 3", value: "3", group: "Group B" },
    { label: "Option 4", value: "4", group: "Group B" },
  ];

  const [selectedSingle, setSelectedSingle] = useState<string>("");
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>([]);


  useEffect(() => {
    console.log(selectedSingle)
  }, [selectedSingle])

  useEffect(() => {
    console.log(selectedMultiple)
  }, [selectedMultiple])
  //----------------------------------------------------------


  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>

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
      <Button variant='contained'>Contained</Button>
      <Button variant='contained' disabled>
        Disabled
      </Button>
      <Button variant='contained' href='#contained-buttons'>
        Link
      </Button>

      {/* TODO: Remove in the end  ----------------------------------------------*/}
      <div style={{ marginTop: "50px" }}>
       <Form/>
      </div>



      {/* ------------------------------------------------------------------------------ */}

    </div>
  );
}
