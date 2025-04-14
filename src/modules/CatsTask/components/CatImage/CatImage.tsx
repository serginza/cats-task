import { memo } from 'react';
import { CircleLoader } from 'shared/ui';
import { StyledNoData, StyledImg } from './CatImage.style';
import { CatsType } from '../../CatsTask.types';

type Props = {
  url?: CatsType['url'];
  isLoading: boolean;
};

function CatImageProto({ url, isLoading }: Props) {
  if (!url && !isLoading)
    return (
      <StyledNoData>
        <div>No data</div>
        <div>(｡╯︵╰｡)</div>
      </StyledNoData>
    );

  return isLoading ? <CircleLoader /> : <StyledImg src={url} alt="cat-image" />;
}

export const CatImage = memo(CatImageProto);
