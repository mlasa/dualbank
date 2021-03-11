import React from 'react';
import { Tag, PlusCircle, EyeOff } from 'react-feather';
import { Container, Bills } from './styles';

const SecondHeader: React.FC = () => {
  return (
    <Container>
      <Tag size={25} />
      <PlusCircle size={25} />
      <Bills>
        <div>
          <span>P</span>
          <div>
            <strong>
              Principal
              <EyeOff size={20} />
            </strong>
            <p>R$40.000,00</p>
          </div>
        </div>
        <div>
          <span>A</span>
          <div>
            <strong>
              Aluguel
              <EyeOff size={20} />
            </strong>
            <p>R$40.000,00</p>
          </div>
        </div>
        <div>
          <span>A</span>
          <div>
            <strong>
              Alimentação
              <EyeOff size={20} />
            </strong>
            <p>R$40.000,00</p>
          </div>
        </div>
      </Bills>
    </Container>
  );
};
export default SecondHeader;
