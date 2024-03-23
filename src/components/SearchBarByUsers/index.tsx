import { useCallback } from 'react';

import { useLazyFindUsersQuery } from '@/store/api';

import { ElasticSearch } from '../UI';

import { UserCardStyled } from './styled';

export const SearchBarByUsers = () => {
  const [trigger, { data, isFetching }] = useLazyFindUsersQuery();
  const showEmptyMessage = !data?.length;

  const handleSearchValue = useCallback(
    (value: string) => {
      trigger(value);
    },
    [trigger],
  );

  return (
    <ElasticSearch
      placeholder="Search Users"
      onChange={handleSearchValue}
      isLoading={isFetching}
      isEmpty={showEmptyMessage}
      emptyMessage="No Users Found"
    >
      {data && data.map((user) => <UserCardStyled key={user.id} user={user} />)}
    </ElasticSearch>
  );
};
