import { useState } from 'react';
import { HelpOutline, EmailOutlined } from '@mui/icons-material';

export type TextFieldProps = {
  className?: string;
  placeholder?: string;
  left?: string | number;
  top?: string | number;
  width?: string | number;
  height?: string | number;
  name?: string;
  type?: string;
  rows?: number;
};

function TextField(propsInput: TextFieldProps) {
  const [inputValue, setInputValue] = useState<string>('');
  // const [statusValue, setStatusValue] = useState<string>('');
  // const statusInput = [
  //   { status: 'error', color: 'red' },
  //   { status: 'success', color: 'green' },
  //   { status: 'withValue', className: 'black' },
  // ];
  const { className, ...props } = propsInput;

  const icons = [
    { icon: <EmailOutlined />, name: 'email' },
    { icon: 'IL |', name: 'phone number' },
    { icon: 'http:// |', name: 'website' },
  ];
  function statusField(status: string) {
    if(status === 'error'){
      return 'text-red-500  border-solid border-[2px] border-red-500 ';
    } 
    if(status === 'success'){
      return 'text-green-500  border-solid border-[2px] border-green-500 ';
    }
    if (status) {
      return 'text-black-500';
    }
    else {
     return 'text-gray-500';
   }
  }
  return (
    <div
      className='flex flex-col'
      style={{ left: '34px', top: '61px', width: '298px', height: '60px' }}
    >
      <label className='bg-black text-white'>{props.name}</label>
      {props.name === 'description' || props.type === 'textarea' ? (
        <textarea
          {...props}
          style={{ width: '298px', height: '130px', top: '25px', borderRadius: '4px' }}
          className={`${icons.find((icon) => icon.name === props.name?.toLowerCase())?.name === 'website' ? 'pl-18' : 'pl-10'} pr-10 border-2 border-black rounded-md ${className}`}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></textarea>
      ) : (
        <div className='relative'>
          <span className='absolute left-2 top-1/2 transform -translate-y-1/2'>
            {icons.find((icon) => icon.name === props.name?.toLowerCase())?.icon}
          </span>
          <input
            {...props}
            className={` ${statusField('success')} ${icons.find((icon) => icon.name === props.name?.toLowerCase())?.name === 'website' ? 'pl-18' : 'pl-10'} pr-10 border-2 border-black rounded-md ${className}`}
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
