type TopNavLoaderProps = {
  background?: 'black' | 'blue-500';
};

export default function TopNavLoader(props: TopNavLoaderProps) {
  const { background = 'black' } = props;
  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <div className={`h-1 bg-${background} animate-[loader_0.8s_ease-in-out_infinite]`} />
    </div>
  );
}
