import React from 'react';
import { DetailsCard } from './details-card';



export const RepoList = ({
  repos = [],
  style = {}
}) => {
  return (
    <div style={style}>
      <>
        {
          repos.map(({ id, ...repo }) => <DetailsCard key={id} {...repo} />)
        }
      </>
    </div>
  )
}