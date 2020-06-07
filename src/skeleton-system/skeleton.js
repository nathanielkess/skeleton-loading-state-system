import React from 'react';

export const SkeletonContext = React.createContext(false);

export const SkeletonProvider = ({
  value,
  children
}) => {
  return (
    <SkeletonContext.Provider value={value}>
      {children}
    </SkeletonContext.Provider>
  )
}