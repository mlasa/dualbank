import React from 'react';
import { ChevronDown, Copy, EyeOff } from 'react-feather';
import { Container, Balance, Account, ContainerHeaderBar } from './styles';
import logo from '../../assets/logo.svg';
import UserBAr from '../UserBar';
import Hiden from '../Hiden';
import { useVisibility } from '../../hooks/Visibility';

const Header: React.FC = () => {
  const { isBalanceHeaderVisible, changeBalanceHeader } = useVisibility();
  return (
    <>
      <ContainerHeaderBar>
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
              Saldo
              {isBalanceHeaderVisible && (
                <EyeOff size={18} onClick={changeBalanceHeader} />
              )}
            </strong>
            {isBalanceHeaderVisible ? (
              <p>R$40.000,00</p>
            ) : (
              <Hiden hideElement={changeBalanceHeader} />
            )}
          </Balance>
        </Container>
        <UserBAr />
      </ContainerHeaderBar>
    </>
  );
};
export default Header;
