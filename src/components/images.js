import React, { useContext } from 'react'
import { SkeletonContext } from '../skeleton-system/skeleton'

export const Image = ({
  src,
  width,
  height,
  alt,
}) => {
  const isLoading = useContext(SkeletonContext)
  return {
    true: <div style={{ width, height, backgroundColor: '#666666' }} />,
    false: <img alt={alt} width={width} height={height} src={src} />,
  }[isLoading]
}