import React, { useState } from 'react';
import { Icon } from './icon';

const styles = {
  box: {
    backgroundColor: '#4A4A4A',
    borderRadius: 12,
    display: 'flex',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
  input: {
    padding: 0,
    paddingLeft: '.5rem',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: 'none',
    flex: 1,
    fontSize: '1rem',
  },
  button: {
    padding: 0,
    paddingRight: '.5rem',
    border: 0,
    backgroundColor: 'transparent'
  }
}

export const Search = ({
  onSubmit,
}) => {

  const [searchValue, setSearchValue] = useState('');
  const handleChange = ({ target }) => setSearchValue(target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue)
  };

  return (
    <form style={styles.box} onSubmit={handleSubmit}>
      <input style={styles.input} type="text" value={searchValue} onChange={handleChange} />
      <button style={styles.button}>
        <Icon size={30} name="search" />
      </button>
    </form>
  );
}