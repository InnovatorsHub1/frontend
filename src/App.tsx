import React from 'react';
import SkeletonText from './components/skeletons/SkeletonText';


function App() {
  return (
    <div>
      <h1>Hello, Skeleton Loaders!</h1>
      <SkeletonText lines={5} lineHeight="1.5em" spacing={10} randomWidths={true} />
 
    </div>
  );
}

export default App;
