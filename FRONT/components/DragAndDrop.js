'use client';

import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import Button from 'components/Button';

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
    <div className='flex min-h-screen flex-col items-center justify-center bg-secondary'>
      <div className='py-5'>
        <img src='/images/bota-planta.png' />
      </div>
      <h2 className='my-5 font-primary text-5xl font-bold'>¿Tienes una planta que no se ve saludable?</h2>
      <p className='font-primary text-xl text-primary'>
        <span className='font-semibold'>¡Estamos aquí para ayudarte!</span> Sube una imagen de tu planta enferma a
        continuación <br />y utilizaremos nuestra avanzada tecnología de detección para identificar el problema
      </p>
      <div className='card m-10 w-2/5 flex-shrink-0 bg-white shadow-2xl'>
        <div className='flex flex-col items-center py-10'>
          <select className='select select-primary my-8 w-full max-w-xs'>
            <option disabled selected>
              Elige un cultivo
            </option>
            <option>Manzana</option>
            <option>Maiz</option>
          </select>
          <FileUploader
            handleChange={handleFileDrop}
            name='file'
            classes='bg-white py-16 px-40 border-dashed border-2 border-primary rounded-lg flex flex-col items-center hover:bg-stone-100'
            types={fileTypes}
          >
            <img src='/images/upload-icon.png' className='py-3' />
            <label className='label-text text-primary'>Arrastra tus imágenes o haz click aquí</label>
          </FileUploader>
          <div className='my-5'>
            <Button style='primary'>Enviar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragAndDrop;
