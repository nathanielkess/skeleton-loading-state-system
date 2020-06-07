import React from 'react';
import { Icon } from './icon';
import { Text } from './text';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '2.5rem',

  },
  main: {
    marginLeft: '1rem',
    flexGrow: 1
  },
  title: {
    marginTop: '.rem',
    paddingTop: '0px',
    fontWeight: '700',
  },
  author: {
    marginTop: '.3rem',
    fontSize: '.8rem',
  },
  stars: {
    marginTop: '.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  starCount: {
    marginLeft: '.5rem',
    fontSize: '.8rem',
  }
}

export const DetailsCard = ({
  iconName,
  description,
  author,
  stars,
}) => {
  return (
    <div style={styles.card}>
      <Icon name={iconName} />
      <div style={styles.main}>
        <Text style={styles.title}>{description}</Text>
        <Text style={styles.author}>{author}</Text>
        <div style={styles.stars}>
          <Icon size={25} name="star" />
          <Text style={styles.starCount}>{stars}</Text>
        </div>
      </div>
    </div>
  )
}