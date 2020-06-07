import React, { useContext } from 'react';

const SkeletonContext = React.createContext(false);

export const SkeletonArea = ({
  connect,
  children
}) => {
  return (
    <SkeletonContext.Provider value={connect}>
      {children}
    </SkeletonContext.Provider>
  )
}

export const useIsSkeletonLoading = () => useContext(SkeletonContext)

export const useSkeletonData = ({ realData, fakeData, isLoadingPredicate }) => {
  const isLoading = isLoadingPredicate(realData)
  const data = isLoading ? fakeData : realData;
  return {
    data,
    connector: isLoading,
  }
}; 