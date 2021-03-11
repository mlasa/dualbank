import React from 'react';
import GlobalStyle from './global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SecondHeader from './components/SecondHeader';
import { Headers, HorizontalHeaders } from './Styles';
import UserActions from './components/UserActions';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Headers>
        <Sidebar />
        <HorizontalHeaders>
          <SecondHeader />
          <UserActions />
        </HorizontalHeaders>
      </Headers>
      <GlobalStyle />
    </div>
  );
};

export default App;
