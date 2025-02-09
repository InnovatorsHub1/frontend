import { useState } from 'react';

export type TextFieldProps = {
  className?: string;
  placeholder?: string;
  left?: string | number;
  top?: string | number;
  width?: string | number;
  height?: string | number;
};
function TextField(propsInput: TextFieldProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const { className, left = '34px', top = '61px', width = '298px', height = '60px', ...props } = propsInput;
  return (
    <div className='flex flex-col' style={{ left, top, width, height }}>
      <label className='bg-black text-white'>Email {inputValue ? 'With Info' : 'Empty'}</label>
      <input
        {...props}
        style={{ width: 298, height: 35, top: '25px', borderRadius: '4px', borderWidth: '1px' }}
        className={`border-2 border-black rounded-md ${className}`}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
}

// comment

export default TextField;
