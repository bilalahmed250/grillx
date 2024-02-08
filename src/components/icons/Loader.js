import styled, { keyframes } from 'styled-components';
import { FaHamburger } from 'react-icons/fa';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const LoaderContainer = styled.div`
  display: inline-block;
  animation: ${bounce} 1s ease infinite;
`;

const BurgerLoader = () => {
  return (
    <LoaderContainer>
      <FaHamburger size={100} color="#FFA500" />
    </LoaderContainer>
  );
};

export default BurgerLoader;
