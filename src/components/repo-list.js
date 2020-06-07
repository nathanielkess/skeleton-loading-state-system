import React from 'react';
import { DetailsCard } from './details-card';
import { SkeletonArea, useSkeletonData } from './../skeleton-system/skeleton';


export const RepoList = ({
  repos = [],
  isLoading = false,
}) => {

  const { data, connector } = useSkeletonData({
    realData: repos,
    fakeData: [{ id: 1 }, { id: 2 }, { id: 3 }],
    isLoadingPredicate: () => isLoading,
  })

  return (
    <SkeletonArea connect={connector}>
      {
        data.map(({ id, ...repo }) => <DetailsCard key={id} {...repo} />)
      }
    </SkeletonArea>
  )
}