import React, { useState } from 'react';
import LoginPage from './pages/LoginPage'; 
import PluginPage from './pages/PluginPage'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(false); 
  };

  return (
    <>
      {isLoggedIn ? (
        <PluginPage /> 
      ) : (
        <LoginPage onLogin={handleLogin} /> 
      )}
    </>
  );
}

export default App;
