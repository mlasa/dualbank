import React from 'react';
import { MessageSquare, Calendar, Bell, Search } from 'react-feather';
import { Container } from './styles';

const UserBar: React.FC = () => {
  return (
    <Container>
      <div>
        <input placeholder="Pesquisar" type="text" />
        <Search size={20} />
      </div>
      <MessageSquare size={20} />
      <Calendar size={20} />
      <Bell size={20} />
      <img
        src="https://avatars.githubusercontent.com/u/43733159?s=460&u=44809dcf2f7daef870a8404e63973b5519be6a5a&v=4"
        alt="Marcella"
      />
    </Container>
  );
};
export default UserBar;
