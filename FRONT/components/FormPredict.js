'use client';
import React, { useState } from 'react';
import Button from 'components/Button';

export default function FormPredict() {
  const [recomendation, setRecomendation] = useState('')
  const [title, setTitle] = useState('')
  const [formData, setFormData] = useState({
    n: null,
    p: null,
    k: null,
    temperature: null,
    humidity: null,
    ph: null,
    rainfall: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:9000/recomendation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),

    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setRecomendation({ titulo: title, num_cultivo: data });
        console.log(recomendation)
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  console.log(recomendation)
  return (
    <div>
      <h2 className='text-3xl font-semibold text-center py-7 text-primary'>¡Obtén resultados precisos para tu tierra en segundos!</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-rows-4 grid-flow-col gap-6 mx-28 items-center justify-center'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Tìtulo</span>
            </label>
            <input
              name='title'
              onChange={e => setTitle(e.target.value)}
              type="text"
              placeholder="Titulo de la predicción"
              className="input input-bordered w-full max-w-sm input-secondary" />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Nitrógeno</span>
            </label>
            <input
              name='n'
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs input-secondary"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Fósforo</span>
            </label>
            <input
              name='p'
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs input-secondary"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Potásio</span>
            </label>
            <input
              name='k'
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs input-secondary"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Temperatura</span>
            </label>
            <input
              name='temperature'
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs input-secondary"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Humedad</span>
            </label>
            <input
              name='humidity'
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs input-secondary"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>PH</span>
            </label>
            <input
              name='ph'
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs input-secondary"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Precipitación</span>
            </label>
            <input
              name='rainfall'
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs input-secondary"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex justify-center my-10'>
          <Button style='primary' type='submit'>
            Predecir
          </Button>
        </div>
      </form>
    </div>
  );
}
