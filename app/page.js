import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-12 mx-auto px-4 py-8 max-w-screen-xl lg:py-16">
        <div className="col-span-7 place-self-center mr-auto">
          <h1 className="masx-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">
            Crie seu quartos dos sonhos <br className="max-md:hidden" />
            <span className="text-center purple_gradient">usando IA.</span>
          </h1>
          <p className="hero_desc">
            Faça upLoad da sua foto, escolha um modo e escolha entre mais de 40
            estilos. 
            <strong>
              Reimagine o Design Interior de Qualquer Casa, ou Jardin usando o
              RefreshDesign IA.
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
      <div className="text-center max-w-3xl mb-4 text-3xl font-extrabold tracking-tighter md:text-4xl mx-auto">
        Design de Paisagismo e Interiores Criados com IA
      </div>
      <div className="mt-5 text-lg text-center font-light text-gray-500 max-w-4xl md:text-lg mx-auto">
        Nossa inteligência artificial automaticamente reprojeta ambientes
        externos e internos, considerando elementos arquitetônicos como
        gramados, pátios, piscinas e mobiliário, eletrodomésticos externos,
        desde bancos de jardim até instalações para churrasco.
      </div>
      <section className="mt-8 px-4 py-8 max-w-screen-xl grid grid-cols-9 gap-4 w-full mx-auto">
        {/*Image exemple*/}
        <div className="col-span-4">
          <div className="h-64 sm:h-96 w-full aspect-video bg-gray-100 relative">
            <Image
              className="rounded-lg object-cover"
              alt="photo"
              src="/assets/images/original-pic.jpg"
              fill
            />
          </div>
        </div>
        {/*Arrow*/}
        <div className="col-span-1">
          <div className="h-64 sm:h-96 w-full flex justify-center  items-center">
            <Image
              alt="photo"
              src="/assets/images/arrow.png"
              width={30}
              height={30}
            />
          </div>
        </div>
        {/*Image Result*/}
        <div className="col-span-4">
          <div className="h-64 sm:h-96 w-full aspect-video bg-gray-100 relative">
            <Image
              className="rounded-lg object-cover"
              alt="photo"
              src="/assets/images/generated-pic.png"
              fill
            />
          </div>
        </div>
      </section>

      
      <section className="max-w-screen-xl mx-auto mt-20">
        <div>
        <h1 className="text-center max-w-3xl mb-4 text-3xl font-extrabold tracking-tighter md:text-4xl mx-auto">
      Amado por inúmeros Designs ao redor do mundo.
      </h1>
      <p className="mt-5 text-lg text-center font-light text-gray-500 max-w-4xl md:text-lg mx-auto">
        3406+ de Pessoas não podem estar erradas. Deixe a RefreshDesign IA fazer a magica por voce.
      </p>
        </div>
        <div className="mt-8 px-4 py-8 max-w-screen-xl grid grid-cols-12 gap-4 w-full mx-auto">
          <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
            
          </div>
        </div>
      
      </section>
    </div>
  );
}
