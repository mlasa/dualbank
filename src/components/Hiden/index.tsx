import React, { ReactNode } from 'react';
import { Eye } from 'react-feather';
import { HidenContainer } from './styles';

interface HidenProps {
  hideElement(): void;
  elementWidth?: string;
}

const Hiden: React.FC<HidenProps> = ({
  hideElement,
  elementWidth = '70 px',
}) => {
  return (
    <HidenContainer
      style={{ width: `${elementWidth}` }}
      onClick={() => hideElement()}
    >
      <Eye size={20} />
    </HidenContainer>
  );
};
export default Hiden;
