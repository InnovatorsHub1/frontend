import { useEffect, useState } from 'react';
import { SelectOption } from './Select/Select';
import Select from './Select';

export default function Form() {
  // Initialize state with proper type
  const [selected, setSelected] = useState<SelectOption | null>(null);

  useEffect(() => {
    console.log('Selected', selected);
  }, [selected]);

  // New handleChange function for Select component
  const handleChange = (newValue: SelectOption | SelectOption[] | null) => {
    setSelected(newValue as SelectOption);
  };

  const options = [
    { label: 'AAAA', id: 1 },
    { label: 'BBBB', id: 2 },
    { label: 'CCCC', id: 3 },
    { label: 'DDDD', id: 4 },
  ];

  return (
    <div>
      <Select options={options} onChange={handleChange} value={selected} />
    </div>
  );
}
