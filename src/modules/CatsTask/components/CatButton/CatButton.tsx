import { memo, MouseEventHandler } from 'react';
import { StyledButton } from './CatButton.style';

type Props = {
  name: string;
  label: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function CatButtonProto({ name, label, disabled, onClick }: Props) {
  return (
    <StyledButton
      type="button"
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      <b>{label}</b>
    </StyledButton>
  );
}

export const CatButton = memo(CatButtonProto);
