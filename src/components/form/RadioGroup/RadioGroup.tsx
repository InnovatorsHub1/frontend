import { index } from './index';
import RadioButton, { RadioButtonProps } from './RadioButton';
import styles from './RadioGroup.module.scss';

export type RadioGroupProps = {
  options: RadioButtonProps[]  
}

export function RadioGroup(props: RadioGroupProps) 
{
  const { options } = props
  return (
    <div className='radio-group-container'>
        
        {options.map( option => {
        return (<div key = {option.value} >
          {/* BUG: the number is blocking the tailwind txtColor: for example only for -500 red works. for -700 green works */}
          <span className={`text-${option.txtColor}-200`}>  {option.value } </span>
          <RadioButton name={option.name} value={option.value}/>
          </div>)
        
      })}
    </div>

  )
}
