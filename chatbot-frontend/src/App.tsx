import React from 'react';
import ChatContainer from './components/ChatContainer';

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ChatContainer />
    </div>
  );
};

export default App;