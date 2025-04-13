import styled from 'styled-components';

export const StyledForm = styled.form({
  boxSizing: 'border-box',
  width: '400px',
  padding: '20px',
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const ControlsWrapper = styled.div({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  outline: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});
