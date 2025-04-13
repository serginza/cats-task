import styled from 'styled-components';

export const CheckboxWrapper = styled.section({
  width: 'auto',
  height: 'auto',
  fontFamily: 'var(--font-ptsans)',
});

export const StyledLabel = styled.label<{ disabled?: boolean }>((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px',
  opacity: props.disabled ? 0.5 : 1,

  '&:hover': {
    cursor: props.disabled ? 'default' : 'pointer',
  },
}));

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })({
  appearance: 'none',
  width: '16px',
  height: '16px',
  outline: '2px solid var(--soft-indigo-100)',
  borderRadius: '4px',
  position: 'relative',
  transition: 'all 0.1s ease',
  cursor: 'pointer',

  '&:checked': {
    backgroundColor: 'var(--soft-indigo-100)',
    borderColor: 'var(--soft-indigo-100)',
  },

  '&:checked::after': {
    content: '""',
    position: 'absolute',
    top: '2px',
    left: '5px',
    width: '4px',
    height: '8px',
    border: 'solid white',
    borderWidth: '0 2px 2px 0',
    transform: 'rotate(45deg)',
  },
});
