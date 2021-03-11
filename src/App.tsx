import React from 'react';
import GlobalStyle from './global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SecondHeader from './components/SecondHeader';
import { Headers } from './Styles';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Headers>
        <Sidebar />
        <SecondHeader />
      </Headers>
      <GlobalStyle />
    </div>
  );
};

export default App;
