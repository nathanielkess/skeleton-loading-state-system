import React from 'react'

export const Image = ({
  skeleton = false,
  src,
  width,
  height,
  alt,
}) => {
  return {
    true: <div style={{ width, height, backgroundColor: '#666666' }} />,
    false: <img alt={alt} width={width} height={height} src={src} />,
  }[skeleton]
}