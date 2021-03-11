import React from 'react';
import { Printer, Download, Share2 } from 'react-feather';
import { Container, Actions } from './styles';

const UserActions: React.FC = () => {
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
        <button type="button">
          <Share2 size={20} />
        </button>
      </Actions>
    </Container>
  );
};
export default UserActions;
