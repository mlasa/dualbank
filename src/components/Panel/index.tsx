import React from 'react';
import { EyeOff, Eye, RotateCw, Shield, ChevronDown } from 'react-feather';
import { Container, Balance, Data, HidenContainer } from './styles';
import { useVisibility } from '../../hooks/Visibility';
import Hiden from '../Hiden';

const Panel: React.FC = () => {
  const { isBalancePanelVisible, changeBalancePanel } = useVisibility();
  return (
    <Container>
      <form>
        <div>
          <p>Data do Saldo</p>
          <Data>
            <input type="date" placeholder="DD/MM/AAAA" />
            <ChevronDown size={20} />
          </Data>
          <small>
            Saldo atualizado às 15:00
            <RotateCw size={15} />
          </small>
          <p>Saldo disponível</p>
          {isBalancePanelVisible ? (
            <Balance onClick={() => changeBalancePanel()}>
              <Shield size={20} />
              <input type="text" value="R$40.000,00" disabled />
              <EyeOff size={20} />
            </Balance>
          ) : (
            <Hiden hideElement={changeBalancePanel} />
          )}
        </div>
      </form>
    </Container>
  );
};
export default Panel;
