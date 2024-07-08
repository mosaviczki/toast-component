import './App.css';
import React, { useState } from 'react';
import Toast from './Toast';
import Dialog from './Dialog';
import DialogStep from './DialogStepTransition';

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogStep, setOpenDialogStep] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleOpenDialog = () =>{
    setOpenDialog(true)
  }

  const handleOpenDialogStep = () =>{
    setOpenDialogStep(true)
  }

  const onCloseDialog = () =>{
    setOpenDialog(false)
    setOpenDialogStep(false)
  }

  return (
    <div className='containerApp'>
      <button className='buttons' onClick={handleShowToast}>Mostrar Toast</button>
      <button className='buttons' onClick={handleOpenDialog}>Mostrar Dialog</button>
      <button className='buttons' onClick={handleOpenDialogStep}>Mostrar Dialog Com transição de steps</button>
      <DialogStep open={openDialogStep} onClose={onCloseDialog}/>
      <Dialog open={openDialog} onClose={onCloseDialog}/>
      <Toast message="Mensagem de erro" show={showToast} duration={3000} />
    </div>
  );
};

export default App;
