export type RadioButtonProps = {
  value: string;
  name: string;
  txtColor?: string;
  bgColor?: string;
};

export default function RadioButton(props: RadioButtonProps) {
  const { name, value } = props;
  return (
    <>
      <input type='radio' {...props} name={name} value={value} />
    </>
  );
}
