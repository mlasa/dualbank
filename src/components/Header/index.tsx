import React from 'react';
import { ChevronDown, Copy, EyeOff } from 'react-feather';
import { Container, Balance, Account } from './styles';
import logo from '../../assets/logo.svg';
import UserBAr from '../UserBar';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="Dualbank" />

        <Account>
          <strong>
            Conta Corrente
            <ChevronDown size={20} />
          </strong>
          <p>
            Ag. 00005-1 C.C. 00000000000000000020-1
            <Copy size={20} />
          </p>
        </Account>
        <Balance>
          <strong>
            Saldo <EyeOff size={18} />
          </strong>
          <p>R$40.000,00</p>
        </Balance>
        <UserBAr />
      </Container>
    </>
  );
};
export default Header;
