import { useState } from 'react';

import { ICONS } from '@/constants';
import { useGetAllUsersQuery } from '@/store/api';

import {
  LoaderContainer,
  MoreButton,
  RecommendationsContainer,
  RecommendationsTitle,
  UserCardStyled,
} from './styled';

const { SpinnerIcon } = ICONS;
const COUNT_RECOMMENDED_USERS_IN_STEP = 3;
const MAX_COUNT_STEPS = 3;

interface RecommendationsProps {
  className?: string;
}

export const Recommendations = ({ className }: RecommendationsProps) => {
  const [step, setStep] = useState(1);
  const { data, isLoading } = useGetAllUsersQuery();
  const showMoreButton = step !== MAX_COUNT_STEPS && data && data.length > MAX_COUNT_STEPS * step;

  const handleChangeStep = () => {
    setStep((prev) => (prev < MAX_COUNT_STEPS ? prev + 1 : 1));
  };

  return (
    <RecommendationsContainer className={className}>
      <RecommendationsTitle $size="xl2">You Must Like</RecommendationsTitle>

      {isLoading && (
        <LoaderContainer>
          <SpinnerIcon width={30} height={30} />
        </LoaderContainer>
      )}

      {data
        ?.slice(0, COUNT_RECOMMENDED_USERS_IN_STEP * step)
        .map((user) => <UserCardStyled key={user.id} user={user} />)}

      {showMoreButton && <MoreButton onClick={handleChangeStep}>Show more</MoreButton>}
    </RecommendationsContainer>
  );
};
