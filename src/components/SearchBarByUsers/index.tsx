import { useCallback, useState } from 'react';

import { useLazySearchUsersByNameQuery } from '@/store/api';

import { ElasticSearchStyled, UserCardStyled } from './styled';

export const SearchBarByUsers = () => {
  const [trigger, { data, isLoading }] = useLazySearchUsersByNameQuery();
  const [requestStr, setRequestStr] = useState<string>('');
  const showEmptyMessage = !isLoading && !!requestStr.length && data && !data.length;

  const handleSearchValue = useCallback(
    (value: string) => {
      trigger(value);
      setRequestStr(value);
    },
    [trigger],
  );

  return (
    <ElasticSearchStyled
      placeholder="Search user by name"
      onChange={handleSearchValue}
      isLoading={isLoading}
      isEmpty={showEmptyMessage}
      emptyMessage="No Users Found"
    >
      {data && data.map((user) => <UserCardStyled key={user.id} user={user} />)}
    </ElasticSearchStyled>
  );
};
