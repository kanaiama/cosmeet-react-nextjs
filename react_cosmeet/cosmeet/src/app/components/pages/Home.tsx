import Button from "../form/Button";
import Navbar from "@/app/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <body>
      <Navbar />
        <div className="w-full h-screen my-16">
          <div className="w-12/12 flex-col justify-around h-full">
            <div className="h-full flex justify-center w-full">
              <div className="w-9/12 h-full flex flex-col gap-8">
                <h1 className="text-5xl w-4/5 text-neutral-800 tracking-wider">
                  <span className="font-extrabold">Juntos,</span> vamos <br />
                  desencadear a<br />
                  transformação no
                  <br /> mundo
                  <span className="font-extrabold"> dos cosméticos.</span>
                </h1>
                <div className="w-2/5">
                <span className="text-l text-neutral-600 tracking-wider">
                  A Cosmeet vem para transformar o mundo dos cosméticos. Como?
                  Trazendo a conexão necessária para os protagonistas deste
                  setor se unirem, crescerem juntos e inspirarem a indústria.
                </span>
                </div>
                <Button height={40} width={40} nome="aea"></Button>
              </div>
            </div>
          </div>

          <div className="fundo_ilustracao">
            <div className="ilustracao"></div>
          </div>
        </div>

        <div className="caixa_resultados">
          <div className="caixa"></div>
          <div className="caixa"></div>
          <div className="caixa"></div>
        </div>
      </body>
    </>
  );
}
