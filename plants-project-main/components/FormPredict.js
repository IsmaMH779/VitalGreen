'use client';

import Button from 'components/Button';
export default function FormPredict() {
  return (
    <div>
      <h2 className='text-3xl font-semibold text-center py-7 text-primary'>¡Obtén resultados precisos para tu tierra en segundos!</h2>
      <div className='grid grid-rows-4 grid-flow-col gap-6 mx-28 items-center justify-center'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Tìtulo</span>
          </label>
          <input type="text" placeholder="Titulo de la predicción" className="input input-bordered w-full max-w-sm input-secondary" />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Nitrógeno</span>
          </label>
          <input type="number" placeholder="0" className="input input-bordered w-full max-w-xs input-secondary" />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Fósforo</span>
          </label>
          <input type="number" placeholder="0" className="input input-bordered w-full max-w-xs input-secondary" />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Potásio</span>
          </label>
          <input type="number" placeholder="0" className="input input-bordered w-full max-w-xs input-secondary" />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Temperatura</span>
          </label>
          <input type="number" placeholder="0" className="input input-bordered w-full max-w-xs input-secondary" />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Humedad</span>
          </label>
          <input type="number" placeholder="0" className="input input-bordered w-full max-w-xs input-secondary" />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>PH</span>
          </label>
          <input type="number" placeholder="0" className="input input-bordered w-full max-w-xs input-secondary" />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Precipitación</span>
          </label>
          <input type="number" placeholder="0" className="input input-bordered w-full max-w-xs input-secondary" />
        </div>
      </div>
      <div className='flex justify-center my-10'>
        <Button style='primary'>
          Predecir
        </Button>
      </div>
    </div>
  );
}
