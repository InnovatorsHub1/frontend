import RadioButton, { RadioButtonProps } from './RadioButton';

export type RadioGroupProps = {
  btnOptions: RadioButtonProps[];
  txtSize?: 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-4xl' | 'text-7xl';
  margin?: string;
  padding?: string;
  innerPadding?: string;
  bgColor?: string;
  txtColor?: string;
};

export function RadioGroup(props: RadioGroupProps) {
  const { btnOptions, txtColor, bgColor, txtSize, margin, padding, innerPadding } = props;
  return (
    <div
      data-testid='radio-group'
      className={`radio-group-container ${txtColor} ${bgColor} ${txtSize} ${margin} ${padding}`}
      style={{ display: 'flex', fontSize: txtSize }}
    >
      {btnOptions.map((option) => {
        return (
          <div key={option.value} className={`${innerPadding}`}>
            {/* BUG: the number is blocking the tailwind txtColor: for example only for -500 red works. for -700 green works */}
            <span className={`text-${option.txtColor}-200 bg-${option.bgColor}-900`}> {option.value} </span>
            <RadioButton name={option.name} value={option.value} />
          </div>
        );
      })}
    </div>
  );
}
