import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonWeatherContent = () => {
  return (
    <>
      <Skeleton />
      <Skeleton count={1} />
    </>
  );
};

export default SkeletonWeatherContent;
