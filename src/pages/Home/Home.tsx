import GoogleSSOLogin from '@src/components/GoogleSSOLogin';

export default function HomePage() {
  return (
    <div className='size-full p-6'>
      <div>Main</div>
      <div>window</div>
      <GoogleSSOLogin
        onLogin={() => {
          console.log('here');
        }}
        styleClass='w-1/4'
      />
      <div className='bg-error dark:bg-dark-primary'>error</div>
    </div>
  );
}
