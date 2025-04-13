import styled from 'styled-components';

export const StyledButton = styled.button({
  width: 'auto',
  height: 'auto',
  padding: '5px 0',
  fontFamily: 'var(--font-ptsans)',
  color: 'white',
  outline: 'none',
  border: 'none',
  background: 'var(--soft-indigo-70)',
  borderRadius: '5px',
  letterSpacing: '2px',
  transition: 'all 0.1s ease',

  '&:hover': {
    background: 'var(--soft-indigo-100)',
  },

  '&:active': {
    background: 'var(--soft-indigo-90)',
    transform: 'scale(0.98)',
  },
});
