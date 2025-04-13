import styled, { keyframes } from 'styled-components';

// Применены шаблонные строки для анимации (keyframes в styled-components v4 плохо поддерживается)
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(720deg); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid var(--soft-indigo-100);
  border-bottom: 4px solid var(--soft-indigo-100);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate} 1s linear infinite;
`;
