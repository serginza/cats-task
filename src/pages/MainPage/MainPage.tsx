import { memo } from 'react';
import { CatsTask } from 'modules';
import { MainPageWrapper } from './MainPage.style';

function MainPageProto() {
  return (
    <MainPageWrapper>
      <CatsTask />
    </MainPageWrapper>
  );
}

const MainPage = memo(MainPageProto);

export default MainPage;
