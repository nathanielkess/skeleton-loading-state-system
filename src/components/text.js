import React from 'react';
import { useIsSkeletonLoading } from './../skeleton-system/skeleton';

const skeltonStyles = {
  backgroundColor: '#666666',
  color: 'transparent',
  borderRadius: 8,
}

export const Text = ({
  style = {},
  children,
}) => {
  const isLoading = useIsSkeletonLoading();

  return {
    true: <p style={{ ...skeltonStyles, ...style }}>loading...</p>,
    false: <p style={{ ...style }}>{children}</p>,
  }[isLoading]
}
