import { Button } from '@mui/material';
import Select from '../../components/form/Select';
import { useEffect, useState } from 'react';
import SingleSelect from '../../components/form/Select';
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
