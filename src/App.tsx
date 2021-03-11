import React from 'react';
import GlobalStyle from './global';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
    </div>
  );
};

export default App;
