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
  const [data, setData] = useState<{
    fname?: string;
    lname?: string;
    selected?: SelectOption[];
  }>({});

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | SelectOption | SelectOption[] | null) => {
    if (event === null) {
      setData((prev) => ({ ...prev, selected: [] }));
    } else if (Array.isArray(event)) {
      setData((prev) => ({ ...prev, selected: event }));
    } else if ('target' in event) {
      const { name, value, checked, type } = event.target;
      setData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    } else {
      setData((prev) => ({ ...prev, selected: [event] }));
    }
  };

  return (
    <form>
      <input type='text' name='fname' id='fname' placeholder='First Name' onChange={handleChange} />
      <input type='text' name='lname' id='lname' placeholder='Last Name' onChange={handleChange} />
      <Select
        options={options}
        onChange={handleChange}
        value={data.selected || []}
        groupBy={(option) => option.group || ''}
        multiple
        name='selected'
      />
    </form>
  );
}
