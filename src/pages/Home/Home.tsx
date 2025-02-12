import TextField from "@src/components/form/TextField";


export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div className='bg-error dark:bg-dark-primary'>error</div>
      <TextField name="Email" type="email" placeholder={"Entermail@gmail.com"}  />
      <TextField name="Phone Number" type="tel" placeholder={"+972 052 123-4567"}  />
      <TextField name="Website" placeholder={"www.google.com"}  />
      <TextField name="description"  placeholder={"Enter a Description..."} />
      <TextField type="textarea" placeholder={"Enter a Description 2..."}  />
    </div>
  );
}

