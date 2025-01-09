import Loader from '../Loader';
import TopNavLoader from '../TopNavLoader/TopNavLoader';

export default function CombinedLoaders() {
  return (
    <>
      <TopNavLoader />

      <div className='w-full min-h-screen-minus-100 flex flex-col items-center justify-center'>
        <Loader />
      </div>
    </>
  );
}
