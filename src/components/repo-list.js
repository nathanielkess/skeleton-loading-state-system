import React from 'react';
import { DetailsCard } from './details-card';



export const RepoList = ({
  repos = [],
  isLoading = false,
}) => {
  return (
    <>
      {
        repos.map(({ id, ...repo }) => <DetailsCard key={id} {...repo} />)
      }
    </>
  )
}