export type RadioButtonProps = {
    value: string
    name: string  
    type?: "primary" | "secondery" | "default"
    txtColor?: string
}

export default function RadioButton( props: RadioButtonProps ) {

    const { name, value} = props
    return (
        <>

            <input type='radio' {...props} name={name} value={value} / > 
        </>
        
    )
}
