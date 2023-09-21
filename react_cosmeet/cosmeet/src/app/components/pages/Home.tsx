import Button from "../form/Button";
import Navbar from "@/app/components/layout/Navbar";
import Resultado from "../layout/Resultado";

export default function Home() {
  return (
    <>
      <body>
        <Navbar />
        <div className="h-screen flex flex-col justify-around">
          <div className="w-full h-full my-40">
            <div className="w-12/12 flex-col justify-around h-full">
              <div className="h-full flex justify-center w-full">
                <div className="w-9/12  flex flex-col gap-8">
                  <h1 className="w-full md:w-4/5 text-neutral-800 tracking-wider leading-tight text-4xl md:text-6xl sm:text-4xl lg:text-5xl xl:text-6xl text-xl md:text-2xl sm:text-xl lg:text-2xl xl:text-3xl">
                    <span className="font-extrabold">Juntos,</span> vamos <br />
                    desencadear a<br />
                    transformação no
                    <br /> mundo
                    <span className="font-extrabold"> dos cosméticos.</span>
                  </h1>

                  <div className="w-2/5">
                    <span className="text-xl text-neutral-600 tracking-widest leading-tight">
                      A Cosmeet vem para transformar o mundo dos cosméticos. Como?
                      Trazendo a conexão necessária para os protagonistas deste
                      setor se unirem, crescerem juntos e inspirarem a indústria.
                    </span>
                  </div>
                  <Button
                    height={40}
                    width={140}
                    nome="Veja mais"
                    color="#FAFAFA"
                    fontSize={20}
                    fontWeight="bold"
                  />
                </div>
              </div>
            </div>

            <div className="fundo_ilustracao">
              <div className="ilustracao"></div>
            </div>
            <Resultado />
          </div>
        </div>
      </body>
    </>
  );
}
