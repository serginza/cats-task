import { ChangeEventHandler, memo } from 'react';
import {
  CheckboxWrapper,
  StyledCheckbox,
  StyledLabel,
} from './CatCheckbox.style';

type Props = {
  name: string;
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

function CatCheckboxProto({ name, label, checked, onChange, disabled }: Props) {
  return (
    <CheckboxWrapper>
      <StyledLabel disabled={disabled}>
        <StyledCheckbox
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        {label}
      </StyledLabel>
    </CheckboxWrapper>
  );
}

export const CatCheckbox = memo(CatCheckboxProto);
