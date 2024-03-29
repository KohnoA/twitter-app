import { useMemo, useState } from 'react';

import { useGetAllUsersQuery } from '@/store/api';

import {
  COUNT_RECOMMENDED_USERS_IN_STEP,
  INIT_STEP,
  MAX_COUNT_STEPS,
  SpinnerIcon,
} from './constants';
import * as S from './styled';
import { RecommendationsProps } from './types';

export const Recommendations = ({ className }: RecommendationsProps) => {
  const [step, setStep] = useState(INIT_STEP);
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
        .map((user) => <S.UserCardStyled key={user.id} user={user} />),
    [data, step],
  );

  return (
    <section className={className}>
      <S.RecommendationsTitle $size="xl2">You Must Like</S.RecommendationsTitle>

      {isLoading && (
        <S.LoaderContainer>
          <SpinnerIcon width={30} height={30} />
        </S.LoaderContainer>
      )}

      {showEmptyMessage && <S.EmptyMessage $size="xl">No users yet</S.EmptyMessage>}

      {recommendationsData}

      {showMoreButton && <S.MoreButton onClick={handleChangeStep}>Show more</S.MoreButton>}
    </section>
  );
};
