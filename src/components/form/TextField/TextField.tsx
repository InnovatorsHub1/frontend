import { useState } from 'react';
import { HelpOutline, EmailOutlined } from '@mui/icons-material';

export type TextFieldProps = {
  className?: string;
  placeholder?: string;
  name?: string;
  type?: string;
};

const FIELD_ICONS = {
  email: <EmailOutlined />,
  'phone number': 'IL |',
  website: 'http:// |',
} as const;

function TextField(propsInput: TextFieldProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const { className, name, type, placeholder } = propsInput;

  const handleValidation = (value: string) => {
    if (type === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    if (type === 'url') {
      return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value);
    }
    if (type === 'tel') {
      return /^[0-9\s+()-]*$/.test(value);
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    setIsTouched(true);
    setIsValid(handleValidation(e.target.value));
  };

  const handleBlur = () => {
    setIsTouched(true);
    setIsValid(handleValidation(inputValue));
  };

  const getStatusStyle = () => {
    if (!isTouched) return 'text-gray-500';
    if (!isValid) return 'text-red-500 border-solid border-[2px] border-red-500';
    if (inputValue) return 'text-green-500 border-solid border-[2px] border-green-500';
    return 'text-gray-500';
  };

  const getHelpText = () => {
    if (!isValid && isTouched) {
      switch (type) {
        case 'email':
          return 'Please enter a valid email address';
        case 'url':
          return 'Please enter a valid URL';
        case 'tel':
          return 'Please enter a valid phone number';
        default:
          return '';
      }
    }
    return '';
  };

  const fieldName = name?.toLowerCase();
  const fieldType = type?.toLowerCase();

  const icon = FIELD_ICONS[fieldName as keyof typeof FIELD_ICONS] || FIELD_ICONS[fieldType as keyof typeof FIELD_ICONS];

  const isWebsite = fieldName === 'website' || fieldType === 'url';

  return (
    <div className='flex flex-col bg-black left-[34px] top-[61px] w-[298px] h-[60px]'>
      <label className='pl-2 text-white'>{name || type}</label>

      {name === 'description' || type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          className={`w-[298px] h-[130px] top-[25px] rounded-md ${isWebsite ? 'pl-18' : 'pl-10'} pr-10 border-2 border-black ${className}`}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <div className={`relative ${getStatusStyle()}`}>
          <span className='absolute left-2 top-1/2 transform -translate-y-1/2'>{icon}</span>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={`w-[298px] h-[35px] top-[25px] rounded-md ${getStatusStyle()} ${
              isWebsite ? 'pl-18' : 'pl-10'
            } pr-10 border-2 border-black ${className}`}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <HelpOutline className='absolute right-2 top-1/2 transform -translate-y-1/2' title={getHelpText()} />
        </div>
      )}
      {!isValid && isTouched && <span className='text-red-500 text-sm mt-1'>{getHelpText()}</span>}
    </div>
  );
}

export default TextField;
