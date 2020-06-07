import React from 'react';
import { Icon } from './icon';
import { Text } from './text';

export const Header = ({
  iconName,
  children,
}) => {
  return (
    <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '1.5rem' }}>
      {iconName && <Icon style={{ marginRight: '1rem' }} name={iconName} />}
      <Text style={{ fontWeight: '700' }}>{children}</Text>
    </header>
  )
}