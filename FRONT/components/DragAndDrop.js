'use client';

import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG'];

function DragAndDrop() {
  const [files, setFile] = useState([]);
  const handleFileDrop = (file) => {
    setFile(file);
    // Crear una instancia de FormData para enviar el archivo al servidor
    const formData = new FormData();
    formData.append('file', file);

    // Enviar el archivo al servidor
    fetch('http://localhost:9000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result); // Mensaje de respuesta del servidor
      })
      .catch((error) => {
        alert('Error al subir el archivo');
        console.error('Error al subir el archivo:', error);
      });
  };

  return (
    <div className='flex items-center justify-center py-40'>
      <FileUploader
        handleChange={handleFileDrop}
        name='file'
        hoverTitle='Hola'
        classes='bg-white font-primary'
        types={fileTypes}
      />
    </div>
  );
}

export default DragAndDrop;
