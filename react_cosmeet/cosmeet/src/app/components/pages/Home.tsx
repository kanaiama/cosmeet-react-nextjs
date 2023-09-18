import Button from "../form/Button";
import Navbar from "@/app/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="banner">
        <div className="caixa_textos">
          <div className="texto">
            <h1>
              <span>Juntos,</span> vamos desencadear a transformação no mundo{" "}
              <span>dos cosméticos.</span>
            </h1>
          </div>
          <div className="texto">
            <p>
              A Cosmeet vem para transformar o mundo dos cosméticos. Como?
              Trazendo a conexão necessária para os protagonistas deste setor se
              unirem, crescerem juntos e inspirarem a indústria.
            </p>
          </div>
          <Button>Veja Mais</Button>
        </div>

        <div className="fundo_ilustracao">
          <div className="ilustracao">

          </div>
        </div>
      </div>

      <div className="caixa_resultados">
        <div className="caixa"></div>
        <div className="caixa"></div>
        <div className="caixa"></div>
      </div>
    </>
  );
}
