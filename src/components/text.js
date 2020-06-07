import React from 'react';

const skeltonStyles = {
  backgroundColor: '#666666',
  color: 'transparent',
  borderRadius: 8,
}

export const Text = ({
  skeleton = false,
  style = {},
  children,
}) => {
  return {
    true: <p style={{ ...skeltonStyles, ...style }}>loading...</p>,
    false: <p style={{ ...style }}>{children}</p>,
  }[skeleton]
}
