import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonOtherCities = () => {
  return (
    <>
      <Skeleton style={{ marginLeft: 15, marginBottom: 15 }} width={300} height={130} />
      <Skeleton style={{ marginLeft: 15, marginBottom: 15 }} width={300} height={130} />
      <Skeleton style={{ marginLeft: 15, marginBottom: 15 }} width={300} height={130} />
    </>
  );
};

export default SkeletonOtherCities;
