import { useState } from 'react';
import { HelpOutline, EmailOutlined } from '@mui/icons-material';

export type TextFieldProps = {
  className?: string;
  placeholder?: string;
  name?: string;
  type?: string;
};

function TextField(propsInput: TextFieldProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const { className, ...props } = propsInput;

  const icons = [
    { icon: <EmailOutlined />, name: 'email', type: 'email' },
    { icon: 'IL |', name: 'phone number', type: 'tel' },
    { icon: 'http:// |', name: 'website', type: 'url' },
  ];
  function statusField(status: string) {
    if (status === 'error') {
      return 'text-red-500  border-solid border-[2px] border-red-500 ';
    }
    if (status === 'success') {
      return 'text-green-500  border-solid border-[2px] border-green-500 ';
    }
    if (status) {
      return 'text-black-500';
    } else {
      return 'text-gray-500';
    }
  }

  const websiteIput =
    icons.find((icon) => icon.name === props.name?.toLowerCase())?.name === 'website' ||
    icons.find((icon) => icon.type === props.type?.toLowerCase())?.type === 'url';
  return (
    <div className='flex flex-col bg-black' style={{ left: '34px', top: '61px', width: '298px', height: '60px' }}>
      <label className='pl-2 text-white'>{props.name || props.type}</label>
      {props.name === 'description' || props.type === 'textarea' ? (
        <textarea
          {...props}
          style={{ width: '298px', height: '130px', top: '25px', borderRadius: '4px' }}
          className={`${websiteIput ? 'pl-18' : 'pl-10'} pr-10 border-2 border-black rounded-md ${className}`}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></textarea>
      ) : (
        <div className={`relative ${statusField(inputValue)} `}>
          <span className='absolute left-2 top-1/2 transform -translate-y-1/2'>
            {icons.find((icon) => icon.type === props.type?.toLowerCase())?.icon ||
              icons.find((icon) => icon.name === props.name?.toLowerCase())?.icon}
          </span>
          <input
            {...props}
            className={` ${statusField(inputValue)} ${icons.find((icon) => icon.name === props.name?.toLowerCase())?.name === 'website' ? 'pl-18' : 'pl-10'} pr-10 border-2 border-black rounded-md ${className}`}
            style={{ width: '298px', height: '35px', top: '25px', borderRadius: '4px' }}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <HelpOutline className='absolute right-2 top-1/2 transform -translate-y-1/2' />
        </div>
      )}
    </div>
  );
}

export default TextField;
