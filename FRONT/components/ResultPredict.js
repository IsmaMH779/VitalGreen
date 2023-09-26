'use client';

export default function ResultPredict(props) {
  return (
    <div id='about-section' className='bg-white'>
      <div className='hero min-h-screen'>
       <h2>Recommendation:</h2>
      <p>{props.recomendation}</p>
      </div>
    </div>
  );
}
