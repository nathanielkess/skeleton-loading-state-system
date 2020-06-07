import React, { useContext } from 'react';
import { SkeletonContext } from '../skeleton-system/skeleton';

const skeltonStyles = {
  backgroundColor: '#666666',
  color: 'transparent',
  borderRadius: 8,
}

export const Text = ({
  // skeleton = false,
  style = {},
  children,
}) => {
  const isLoading = useContext(SkeletonContext)

  return {
    true: <p style={{ ...skeltonStyles, ...style }}>loading...</p>,
    false: <p style={{ ...style }}>{children}</p>,
  }[isLoading]
}
