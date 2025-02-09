import TextField from "@src/components/form/TextField";

export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div className='bg-error dark:bg-dark-primary'>error</div>
      <TextField  placeholder={"Entermail@gmail.com"}  />
    </div>
  );
}

