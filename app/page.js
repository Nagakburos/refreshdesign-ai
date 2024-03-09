import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid lg:grid-cols-12 mx-auto px-4 py-8 max-w-screen-xl lg:py-16">
        <div className="col-span-7 place-self-center mr-auto">
          <h1 className="masx-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">
            Crie seu espaço dos sonhos <br className="max-md:hidden" />
            <span className="text-center purple_gradient">usando IA.</span>
          </h1>
          <p className="hero_desc">
            Faça UpLoad da sua foto, escolha um modo e escolha entre mais de 40
            estilos.
            <strong>
              Reimagine o Design Interior de Qualquer Casa, ou Jardin usando o
              SylveonAI.
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
            3406+ de Pessoas não podem estar erradas. Deixe a SylveonAI
            fazer a mágica por você.
          </p>
        </div>

        <div className="mt-8 px-4 py-8 max-w-screen-xl grid grid-cols-12 gap-12 w-full mx-auto">
          {/*Downloads*/}
          <div className="col-span-4 border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-black w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M20.88 18.09A5 50  0018 9h-1.26A8 8 0 103 16.29"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              3.9K
            </h2>
            <p className="Leading-relaxed">Downloads</p>
          </div>

          {/*Usuarios*/}
          <div className="col-span-4 border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-black w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 TODO00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              4.1K
            </h2>
            <p className="Leading-relaxed">Usuários</p>
          </div>

          {/*Photos*/}
          <div className="col-span-4 border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="text-black w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h2 className="title-font font-medium text-3xl text-gray-900">
              63.2K
            </h2>
            <p className="Leading-relaxed">Designs</p>
          </div>

        </div>
      </section>


      {/*Testimonials*/}
      <section className="max-w-screen-xl mx-auto mt-20">
        <div>
          <h1 className="text-center max-w-3xl mb-4 text-3xl font-extrabold tracking-tight md:text-4xl mx-auto">
            Testemunhos
          </h1>
        </div>
        <div className="mt-8 px-4 py-8 max-w-screen-xl grid grid-cols-12 gap-8 w-full mx-auto">
          <div className="col-span-12 md:col-span-6  w-full">
            <div className="h-full bg-gray-100 p-8 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
              "Eu confio na IA da SylveonAI para mostrar aos meus clientes uma perspectiva realista de como seu espaço exterior poderia ficar ao me contratarem. E o resultado é sempre impressionante!"
              </p>
              <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col">
                  <span className="title-font font-medium text-gray-900">
                    Ana S. Costa
                  </span>
                  <span className="text-gray-500 text-sm">ARQUITETA PAISAGISTA</span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6  w-full">
            <div className="h-full bg-gray-100 p-8 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">             
                "Eu queria substituir os móveis da minha sala de estar, então gerei algumas ideias de design com a IA da SylveonAI. Escolhi o meu favorito, enviei para o fabricante de móveis e agora tenho ele na vida real. Tecnologia incrível!"
              </p>
              <a className="inline-flex items-center">
                <span className="flex-grow flex flex-col">
                  <span className="title-font font-medium text-gray-900">
                    Ramon Miranda
                  </span>
                  <span className="text-gray-500 text-sm">DESIGNER</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


//https://next-auth.js.org/errors#client_fetch_error