import { index } from './index';
import RadioButton, { RadioButtonProps } from './RadioButton';
import styles from './RadioGroup.module.scss';

export type RadioGroupProps = {
  btnOptions: RadioButtonProps[]
  txtSize?: 'xs' | 'sm' |'base' |'lg' |'xl' |'4xl' |'7xl' 
  margin?: string 
  padding?: string 
  innerPadding?: string 


}

export function RadioGroup(props: RadioGroupProps) 
{
  const { btnOptions, txtSize, margin, padding, innerPadding } = props
  return (
    <div className={`radio-group-container text-${txtSize} ${margin} ${padding}`} style={{display: "flex", fontSize: txtSize}}>
        
        {btnOptions.map( option => {
        return (<div key = {option.value} className={`${innerPadding}`} >
          {/* BUG: the number is blocking the tailwind txtColor: for example only for -500 red works. for -700 green works */}
            <span className={`text-${option.txtColor}-200 bg-${option.bgColor}-900`}>  {option.value } </span>
            <RadioButton name={option.name} value={option.value}/>
          </div>)
        
      })}
    </div>

  )
}
