'use client';

export default function AboutSection() {
  return (
    <div id='about-section' className='bg-white py-16'>
      <div className='hero min-h-screen'>
        <div className='flex flex-col items-center lg:flex-row'>
          <img src='/images/people.jpg' className='ml-40 max-w-xl rounded-3xl shadow-2xl' />
          <div className='m-8 mx-40 pl-8'>
            <h1 className='text-5xl font-semibold text-primary'>Sobre Nosotros</h1>
            <p className='py-6 text-xl'>
              En VitalGreens, estamos dedicados a hacer que la jardinería en casa sea accesible, emocionante y
              gratificante para todos. Nuestra historia comenzó con una pasión compartida por la agricultura en casa y
              el deseo de ayudar a quienes desean cultivar sus propios huertos en casa, ya sean principiantes o
              jardineros con experiencia. Nuestro compromiso es claro: queremos ser tu guía confiable en este viaje de
              jardinería. Entendemos que cada planta tiene una historia que contar y que cada rincón de tu hogar tiene
              el potencial de convertirse en un oasis verde. ¿Qué nos hace diferentes? No solo te proporcionamos
              conocimientos y recursos, sino que también creamos una comunidad de amantes de la jardinería que comparten
              su experiencia, consejos y trucos. Creemos en la fuerza de la comunidad para inspirar y empoderar a las
              personas a cuidar de sus plantas y cosechar la satisfacción de cultivar alimentos frescos y hermosas
              flores.
            </p>
            <p className='py-6 text-xl'>
              Nuestra misión es proporcionarte herramientas prácticas, consejos expertos y una plataforma donde puedas
              aprender, conectarte y prosperar como jardinero en casa. No importa si sueñas con cosechar tus propios
              alimentos saludables o simplemente deseas rodearte de la belleza de las plantas, estamos aquí para
              ayudarte a alcanzar tus objetivos. Únete a nosotros en este viaje verde y descubre el placer de cultivar
              en casa. ¡Bienvenido a VitalGreens, donde tu historia de jardinería comienza a florecer!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
