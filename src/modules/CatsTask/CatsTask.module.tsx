import { memo, useEffect, useState } from 'react';
import { getCatsAgent } from './CatsTask.agent';
import { CatCheckbox, CatButton, CatImage } from './components';
import { CatsType } from './CatsTask.types';
import { ControlsWrapper, StyledForm } from './CatsTask.styles';

function CatsTaskProto() {
  const [isLoading, setIsLoading] = useState(false);
  const [cats, setCats] = useState<CatsType[]>([]);
  const [enabled, setEnabled] = useState<boolean>(true);
  const [refrash, setRefrash] = useState<boolean>(false);

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
    if (refrash) {
      getCats();
      const interval = setInterval(() => {
        getCats();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [refrash]);

  const handleChangeEnable = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnabled(event.target.checked);
  };

  const handleChangeRefrash = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRefrash(event.target.checked);
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
          disabled={refrash}
        />
        <CatCheckbox
          name={'refrash'}
          label={'Auto-refrash every 5 second'}
          checked={refrash}
          onChange={handleChangeRefrash}
        />
        <CatButton
          name={'getCat'}
          label={'Get Cat'}
          disabled={isLoading || !enabled || refrash}
          onClick={getCats}
        />
      </ControlsWrapper>
      <CatImage url={cats[0]?.url} isLoading={isLoading} />
    </StyledForm>
  );
}

export const CatsTask = memo(CatsTaskProto);
