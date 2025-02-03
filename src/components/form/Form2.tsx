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

type FormData = {
  fname?: string;
  lname?: string;
  [key: `selected${number}`]: SelectOption[];
}

export default function Form2() {
  const [data, setData] = useState<FormData>({});

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectOption | SelectOption[] | null,
    selectId?: number
  ) => {
    if (event === null) {
      setData((prev) => ({ 
        ...prev, 
        [`selected${selectId}`]: [] 
      }));
    } else if (Array.isArray(event)) {
      setData((prev) => ({ 
        ...prev, 
        [`selected${selectId}`]: event 
      }));
    } else if ('target' in event) {
      const { name, value, checked, type } = event.target;
      setData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else {
      setData((prev) => ({ 
        ...prev, 
        [`selected${selectId}`]: [event] 
      }));
    }
  };

  const onSelectChange = (selectId: number) => (value: SelectOption | SelectOption[] | null) => {
    handleChange(value, selectId);
  };

  return (
    <form>
      <input 
        type='text' 
        name='fname' 
        id='fname' 
        placeholder='First Name' 
        onChange={handleChange} 
      />
      <input 
        type='text' 
        name='lname' 
        id='lname' 
        placeholder='Last Name' 
        onChange={handleChange} 
      />
      <Select
        options={options}
        onChange={onSelectChange(1)}
        value={data.selected1 || []}
        groupBy={(option) => option.group || ''}
        multiple
      />
      <Select
        options={options}
        onChange={onSelectChange(2)}
        value={data.selected2 || []}
        groupBy={(option) => option.group || ''}
        multiple
      />
    </form>
  );
}