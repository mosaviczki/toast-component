import './App.css';
import React, { useState } from 'react';
import Toast from './Toast';
import Dialog from './Dialog';

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleOpenDialog = () =>{
    setOpenDialog(true)
  }

  const onCloseDialog = () =>{
    setOpenDialog(false)
  }

  return (
    <div>
      <button className='buttons' onClick={handleShowToast}>Mostrar Toast</button>
      <button className='buttons' onClick={handleOpenDialog}>Mostrar Dialog</button>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <h1>Teste</h1>
      <Dialog open={openDialog} onClose={onCloseDialog}/>
      <Toast message="Mensagem de erro" show={showToast} duration={3000} />
    </div>
  );
};

export default App;
