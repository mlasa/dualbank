import React from 'react';
import GlobalStyle from './global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <GlobalStyle />
    </div>
  );
};

export default App;
