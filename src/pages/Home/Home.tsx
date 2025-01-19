import { Button } from '@mui/material';
import { PasswordInput } from '@src/components/inputs/PasswordInput/PasswordInput';
import { SearchInput } from '@src/components/inputs/SearchInput/SearchInput';
import { useState } from 'react';


export default function HomePage() {

  const [searchValue, setSearchValue] = useState('');

  const suggestions = [
    { text: 'Popular search 1', type: 'trending' },
    { text: 'Suggestion 1', type: 'suggestion' },
    { text: 'Suggestion 2', type: 'suggestion' },
  ] as any;

  const handleSearch = (searchValue: string) => {
    console.log('Search value:', searchValue);
  };

  

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
      

      <SearchInput
        label="Search"
        value={searchValue}
        onChange={setSearchValue}
        onSearch={handleSearch}
        suggestions={suggestions}
        showSearchHistory
        instantSearch
        helperText="Search for anything"
      />
    </div>
  );
}
