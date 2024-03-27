import { useMemo, useState } from 'react';

import { useGetAllUsersQuery } from '@/store/api';

import { COUNT_RECOMMENDED_USERS_IN_STEP, MAX_COUNT_STEPS, SpinnerIcon } from './constants';
import {
  EmptyMessage,
  LoaderContainer,
  MoreButton,
  RecommendationsTitle,
  UserCardStyled,
} from './styled';
import { RecommendationsProps } from './types';

export const Recommendations = ({ className }: RecommendationsProps) => {
  const [step, setStep] = useState(1);
  const { data, isLoading } = useGetAllUsersQuery();
  const showMoreButton = step !== MAX_COUNT_STEPS && data && data.length > MAX_COUNT_STEPS * step;
  const showEmptyMessage = !isLoading && !data?.length;

  const handleChangeStep = () => {
    setStep((prev) => (prev < MAX_COUNT_STEPS ? prev + 1 : 1));
  };

  const recommendationsData = useMemo(
    () =>
      data
        ?.slice(0, COUNT_RECOMMENDED_USERS_IN_STEP * step)
        .map((user) => <UserCardStyled key={user.id} user={user} />),
    [data, step],
  );

  return (
    <section className={className}>
      <RecommendationsTitle $size="xl2">You Must Like</RecommendationsTitle>

      {isLoading && (
        <LoaderContainer>
          <SpinnerIcon width={30} height={30} />
        </LoaderContainer>
      )}

      {showEmptyMessage && <EmptyMessage $size="xl">No users yet</EmptyMessage>}

      {recommendationsData}

      {showMoreButton && <MoreButton onClick={handleChangeStep}>Show more</MoreButton>}
    </section>
  );
};
