import TextField from '@src/components/form/TextField';

export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div className='bg-error dark:bg-dark-primary'>error</div>

      <form className='flex flex-col gap-4 bg-black'>
        <TextField className="bg-white" name='Email' type='email' placeholder={'Entermail@gmail.com'}  />
        <TextField
        className="bg-white"
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          rows={4}
        />
      </form>
    </div>
  );
}
