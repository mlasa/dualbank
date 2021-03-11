import React from 'react';
import GlobalStyle from './global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SecondHeader from './components/SecondHeader';
import { Headers, Horizontal } from './Styles';
import UserActions from './components/UserActions';
import Panel from './components/Panel';
import { VisibilityProvider } from './hooks/Visibility';

const App: React.FC = () => {
  return (
    <div className="App">
      <VisibilityProvider>
        <Header />
        <Headers>
          <Sidebar />
          <Horizontal>
            <SecondHeader />
            <UserActions />
            <Panel />
          </Horizontal>
        </Headers>
        <GlobalStyle />
      </VisibilityProvider>
    </div>
  );
};

export default App;
