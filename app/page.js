import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-12 mx-auto px-4 py-8 max-w-screen-xl lg:py-16">
        <div className="col-span-7 place-self-center mr-auto">
          <h1 className="masx-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">
            Crie seu quartos dos sonhos <br className="max-md:hidden" />
            <span className="text-center purple_gradient">usando AI.</span>
          </h1>
          <p className="hero_desc">
            Faça upLoad da sua foto, escolha um modo e escolha entre mais de 40
            estilos.
            <strong>
              Reimagine o Design Interior de Qualquer Casa, ou Jardin usando o
              RefreshDesign AI.
            </strong>
          </p>
          <button type="button" className="mt-8 black_btn">
            Recrie já
          </button>
        </div>
        <div className="mt-8 lg:mt-0 lg:col-span-5">
          <video
            className="rounded-lg"
            loop={true}
            autoplay="autoplay"
            muted
            controls
          >
            {""}
            <source src="/hero-video.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
