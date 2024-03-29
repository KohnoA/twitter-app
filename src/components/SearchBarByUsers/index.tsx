import { useDebounce } from '@/hooks/useDebounce';
import { useLazyFindUsersQuery } from '@/store/api';

import { ElasticSearch } from '../UI';

import * as S from './styled';

interface SearchBarByUsersProps {
  onOpen?: () => void;
}

export const SearchBarByUsers = ({ onOpen }: SearchBarByUsersProps) => {
  const [trigger, { data, isFetching }] = useLazyFindUsersQuery();
  const debounce = useDebounce();
  const showEmptyMessage = !!data && !data.length;

  const handleSearchValue = (value: string) => {
    debounce(() => {
      trigger(value);
      if (onOpen) onOpen();
    });
  };

  return (
    <ElasticSearch
      placeholder="Search Users"
      onChange={handleSearchValue}
      isLoading={isFetching}
      isEmpty={showEmptyMessage}
      emptyMessage="No Users Found"
    >
      {data && data.map((user) => <S.UserCardStyled key={user.id} user={user} />)}
    </ElasticSearch>
  );
};
