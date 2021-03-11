import React from 'react';
import { Tag, PlusCircle, EyeOff } from 'react-feather';
import { Container, Bills } from './styles';
import Hiden from '../Hiden';
import { useVisibility } from '../../hooks/Visibility';

const SecondHeader: React.FC = () => {
  const {
    isFirstValue,
    changeFirstValue,
    isSecondValue,
    changeSecondValue,
    isThirdValue,
    changeThirdValue,
  } = useVisibility();
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
              {isFirstValue && <EyeOff size={20} onClick={changeFirstValue} />}
            </strong>
            <p>
              {isFirstValue ? (
                `R$40.000,00`
              ) : (
                <Hiden hideElement={changeFirstValue} />
              )}
            </p>
          </div>
        </div>
        <div>
          <span>A</span>
          <div>
            <strong>
              Aluguel
              {isSecondValue && (
                <EyeOff size={20} onClick={changeSecondValue} />
              )}
            </strong>
            <p>
              {isSecondValue ? (
                `R$40.000,00`
              ) : (
                <Hiden hideElement={changeSecondValue} />
              )}
            </p>
          </div>
        </div>
        <div>
          <span>A</span>
          <div>
            <strong>
              Alimentação
              {isThirdValue && <EyeOff size={20} onClick={changeThirdValue} />}
            </strong>
            <p>
              {isThirdValue ? (
                `R$40.000,00`
              ) : (
                <Hiden hideElement={changeThirdValue} />
              )}
            </p>
          </div>
        </div>
      </Bills>
    </Container>
  );
};
export default SecondHeader;
