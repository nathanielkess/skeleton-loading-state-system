import React from 'react';
import { DetailsCard } from './details-card';


export const RepoList = ({
  repos = [],
  isLoading = false,
}) => {

  const data = isLoading
    ? [{ id: 1 }, { id: 2 }, { id: 3 }]
    : repos;

  return (
    <>
      {
        data.map(({ id, ...repo }) => <DetailsCard key={id} {...repo} />)
      }
    </>
  )
}