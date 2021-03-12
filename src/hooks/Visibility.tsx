import React, { createContext, useContext, useState } from 'react';

interface VisibilityContextData {
  isBalancePanelVisible: boolean;
  isBalanceHeaderVisible: boolean;
  isFirstValue: boolean;
  isSecondValue: boolean;
  isThirdValue: boolean;
  changeThirdValue(): void;
  changeSecondValue(): void;
  changeFirstValue(): void;
  changeBalancePanel(): void;
  changeBalanceHeader(): void;
}

const VisibilityContext = createContext<VisibilityContextData>(
  {} as VisibilityContextData,
);

const VisibilityProvider: React.FC = ({ children }) => {
  const [isBalancePanelVisible, setIsBalancePanelVisible] = useState(false);
  const [isBalanceHeaderVisible, setIsBalanceHeaderVisible] = useState(false);
  const [isFirstValue, setIsFirstValue] = useState(false);
  const [isSecondValue, setIsSecondValue] = useState(false);
  const [isThirdValue, setIsThirdValue] = useState(false);

  const changeBalancePanel = () =>
    setIsBalancePanelVisible(!isBalancePanelVisible);

  const changeBalanceHeader = () =>
    setIsBalanceHeaderVisible(!isBalanceHeaderVisible);

  const changeFirstValue = () => setIsFirstValue(!isFirstValue);

  const changeSecondValue = () => setIsSecondValue(!isSecondValue);

  const changeThirdValue = () => setIsThirdValue(!isThirdValue);

  return (
    <VisibilityContext.Provider
      value={{
        isBalancePanelVisible,
        isBalanceHeaderVisible,
        isFirstValue,
        isSecondValue,
        isThirdValue,
        changeThirdValue,
        changeSecondValue,
        changeBalancePanel,
        changeBalanceHeader,
        changeFirstValue,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

const useVisibility = (): VisibilityContextData => {
  const visibilityContext = useContext(VisibilityContext);
  if (!visibilityContext) {
    throw new Error(
      'O hook useVisibility deve ser usado dentro do seu Provider',
    );
  }
  return visibilityContext;
};

export { VisibilityProvider, useVisibility };
