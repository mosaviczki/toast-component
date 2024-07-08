import './App.css';
import React, { useState } from 'react';
import Toast from './Toast';

const App = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <button className='buttons' onClick={handleShowToast}>Mostrar Toast</button>
      <Toast message="Mensagem de erro" show={showToast} duration={3000} />
    </div>
  );
};

export default App;
