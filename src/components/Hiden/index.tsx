import React, { ReactNode } from 'react';
import { Eye } from 'react-feather';
import { HidenContainer } from './styles';

interface HidenProps {
  hideElement(): void;
}

const Hiden: React.FC<HidenProps> = ({ hideElement }) => {
  return (
    <HidenContainer style={{ width: '70px' }} onClick={() => hideElement()}>
      <Eye size={20} />
    </HidenContainer>
  );
};
export default Hiden;
