"use client";

export default function AboutSection() {
  return (
    <div id="about-section" className="bg-white py-16">
      <div className="hero min-h-screen">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            src="/images/people.jpg"
            className="max-w-xl rounded-3xl shadow-2xl ml-40"
          />
          <div className="pl-8 m-8 mx-40">
            <h1 className="text-5xl font-semibold text-primary">Sobre Nosotros</h1>
            <p className="py-6 text-xl">
              Nuestro objetivo es brindarte las herramientas y conocimientos
              necesarios para que puedas cultivar tus propias frutas y verduras
              de manera sencilla. Además, ofrecemos una característica que te
              permitirá identificar y abordar problemas de salud en tus plantas
              de forma rápida y precisa. Creemos que todos pueden ser jardineros
              exitosos, incluso si eres nuevo en esto.
            </p>
            <p className="py-6 text-xl">
              Además, ofrecemos una característica única que te permitirá
              identificar y abordar problemas de salud en tus plantas de forma
              rápida y precisa. ¿Notaste manchas extrañas en las hojas o cambios
              en el color de tus plantas? Simplemente toma una foto y utiliza
              nuestra herramienta de diagnóstico de enfermedades de las plantas
              para obtener recomendaciones instantáneas sobre cómo cuidar mejor
              tus cultivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
