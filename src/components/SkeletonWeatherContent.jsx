import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonWeatherContent = () => {
  return (
    <>
      <Skeleton style={{ marginLeft: 15 }} width={250} height={30} />
      <Skeleton style={{ marginLeft: 15 }} width={100} count={1} />
      <Skeleton style={{ marginLeft: 50, marginBottom: 10 }} width={260} height={260} />
    </>
  );
};

export default SkeletonWeatherContent;
