import { memo, useEffect, useState } from 'react';
import { getCatsAgent } from './CatsTask.agent';
import { CatCheckbox, CatButton, CatImage } from './components';
import { CatsType } from './CatsTask.types';
import { ControlsWrapper, StyledForm } from './CatsTask.styles';

function CatsTaskProto() {
  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState<CatsType[]>([]);
  const [enabled, setEnabled] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(false);

  // обработка запроса в модуле вместо стора, т.к. нет необходимости
  // разделять бизнесс-логику и UI в рамках маленькой формы без использования state-менеджера.
  async function getCats() {
    setIsLoading(true);
    try {
      const catsData = await getCatsAgent(1);
      return setCats(catsData);
    } catch (error) {
      if (error instanceof Error) throw error;
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (refresh) {
      getCats();
      const interval = setInterval(() => {
        getCats();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [refresh]);

  const handleChangeEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnabled(event.target.checked);
  };

  const handleChangerefresh = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRefresh(event.target.checked);
  };

  // Модуль без Context.Provider т.к. в случае расширения формы это приведет к рефактору логики
  return (
    <StyledForm>
      <ControlsWrapper>
        <CatCheckbox
          name={'enabled'}
          label={'Enabled'}
          checked={enabled}
          onChange={handleChangeEnable}
          disabled={refresh}
        />
        <CatCheckbox
          name={'refresh'}
          label={'Auto-refresh every 5 second'}
          checked={refresh}
          onChange={handleChangerefresh}
        />
        <CatButton
          name={'getCat'}
          label={'Get Cat'}
          disabled={isLoading || !enabled || refresh}
          onClick={getCats}
        />
      </ControlsWrapper>
      <CatImage url={cats[0]?.url} isLoading={isLoading} />
    </StyledForm>
  );
}

export const CatsTask = memo(CatsTaskProto);
