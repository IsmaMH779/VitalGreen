'use client';
import { useEffect, useState } from "react";
import Button from "./button";

export default function ResultPredict(props) {
  const [crop_data, setCrop_data] = useState({})
  useEffect(() => {
    fetch('http://localhost:9000/api/crop-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plant_id: props.recomendation.num_cultivo }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((data) => {
        setCrop_data(data)
      })
      .catch((error) => {
        console.error(error.message);
      });

  }, []);

  const save_recomendation = () => {
    fetch('http://localhost:9000/api/save_recomendation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.recomendation),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  const getFromChild = () => {
    props.getFromChild(false)
  }
  console.log(props.recomendation)
  return (
    <div id='about-section' className='bg-white'>
      <div className='hero min-h-screen'>
        <p>El mejor cultivo para tu tierra es: {crop_data.CommonName}</p>
        <Button onClick={getFromChild}>
          Volver
        </Button>

        <Button onClick={save_recomendation}>
          Siguiente
        </Button>
      </div>
    </div>
  );
}
