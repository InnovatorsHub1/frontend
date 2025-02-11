import React from 'react';

export interface RadioButtonProps {
  value: string;
  name: string;
  txtColor?: string;
  bgColor?: string;
}

interface RadioGroupProps {
  btnOptions: RadioButtonProps[];
  txtSize?: string;
  margin?: string;
  padding?: string;
  innerPadding?: string;
  onChange?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  btnOptions,
  txtSize = 'text-xl',
  margin = 'm-4',
  padding = 'p-4',
  innerPadding = 'p-2',
  onChange
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={`radio-group-container ${txtSize} ${margin} ${padding}`} style={{ display: 'flex' }}>
      {btnOptions.map((option) => {
        // Create a unique ID using the value
        const id = `radio-${option.value.toLowerCase().replace(/\s+/g, '-')}`;
        
        return (
          <div key={option.value} className={innerPadding}>
            <input
              type="radio"
              id={id}
              name={option.name}
              value={option.value}
              onChange={handleChange}
              className="mr-2"
            />
            <label
              htmlFor={id}
              className={`${option.txtColor ? `text-${option.txtColor}-200` : ''} ${
                option.bgColor ? `bg-${option.bgColor}-900` : ''
              }`}
            >
              {option.value}
            </label>
          </div>
        );
      })}
    </div>
  );
};