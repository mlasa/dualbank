import React, { useState } from 'react';
import { Printer, Download, Share2 } from 'react-feather';
import { Container, Actions } from './styles';
import NavComponent from '../NavComponent';
import { NavShareData } from './NavShareData';

const UserActions: React.FC = () => {
  const [isShare, setIsShare] = useState(false);

  const openNav = () => setIsShare(!isShare);
  return (
    <Container>
      <h1>Saldo Bancário</h1>
      <Actions>
        <button type="button">
          <Printer size={20} />
        </button>
        <button type="button">
          <Download size={20} />
        </button>
        <button type="button" onMouseEnter={() => setIsShare(true)}>
          <Share2 size={20} />
          {isShare && <NavComponent action={openNav} content={NavShareData} />}
        </button>
      </Actions>
    </Container>
  );
};
export default UserActions;
