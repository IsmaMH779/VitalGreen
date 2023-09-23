"use client";
import Link from "next/link";
import Button from "components/Button";

export default function Hero() {
  return (
    <section id="initial-section">
      <div className="hero bg-secondary py-28">
        <div className="hero-content flex-col lg:flex-row p-0">
          <img
            src="/images/tomates.jpg"
            className="max-w-3xl mask mask-circle"
          />
          <div>
            <h1 className="text-5xl font-semibold">
              <span className="font-secondary font-normal">Cultivar</span> en
              casa nunca fue tan fácil{" "}
            </h1>
            <p className="py-6 text-2xl text-primary">
              Cultiva <span className="font-bold">salud y sostenibilidad</span>{" "}
              en tu hogar con la ayuda de nuestra plataforma
            </p>
            <Button style="primary">
              <Link href={"/login"}>Quiero empezar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
