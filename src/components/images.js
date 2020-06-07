import React from 'react'
import { useIsSkeletonLoading } from './../skeleton-system/skeleton';

export const Image = ({
  src,
  width,
  height,
  alt,
}) => {
  const isLoading = useIsSkeletonLoading();
  return {
    true: <div style={{ width, height, backgroundColor: '#666666' }} />,
    false: <img alt={alt} width={width} height={height} src={src} />,
  }[isLoading]
}