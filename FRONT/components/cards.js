"use client";

export default function CardsSection() {
  return (
    <section id="services-section" className="bg-gradient-to-b from-secondary to-white py-32">
      <div>
      <h2 className="text-center text-4xl pb-10 font-semibold text-primary">Nuestros Servicios</h2>
      </div>
      <div className="grid grid-cols-2 justify-items-center container mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/cultivos.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Recomendación de cultivos</h2>
            <p>Mediante un análisis de tu suelo podemos recomendarte el mejor cultivo para tu terreno</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="/images/sick-plant.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Detección de enfermedades</h2>
            <p>Solo con una fotografía de tu planta enferma podemos decirte qué enfermedad padece</p>
          </div>
        </div>
      </div>
    </section>
  );
}
