import { useEffect, useState } from 'react';
import { SelectOption } from './Select/Select';
import Select from './Select';

const options = [
  { label: 'AAAA', id: 1, group: 'Group A' },
  { label: 'BBBB', id: 2, group: 'Group A' },
  { label: 'CCCC', id: 3, group: 'Group B' },
  { label: 'DDDD', id: 4, group: 'Group B' },
  { label: 'AAAasdA', id: 5, group: 'Group A' },
];

export default function Form() {
    const [selected1, setSelected1] = useState<SelectOption | SelectOption[] | null>([]);

    
    const [selected2, setSelected2] = useState<SelectOption | SelectOption[] | null>(null);
  
    useEffect(() => {
      console.log('Selected1', selected1);
    }, [selected1]);
  
    useEffect(() => {
      console.log('Selected2', selected2);
    }, [selected2]);
  
    const handleChange = (selectId: number) => (newValue: SelectOption | SelectOption[] | null) => {
      if (selectId === 1) {
        setSelected1(newValue);
      } else if (selectId === 2) {
        setSelected2(newValue);
      }
    };
  return (
    <div>
      <Select
        options={options}
        onChange={handleChange(1)}
        value={selected1}
        groupBy={(option) => option.group || ''}
        multiple
      />


      <Select
        options={options}
        onChange={handleChange(2)}
        value={selected2}
        groupBy={(option) => option.group || ''}
        // multiple
      />
    </div>
  );
}
