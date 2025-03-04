import { useState } from "react";
import styled from "./styled.module.css";
import ButtonPrice from "./ButtonPrice/ButtonPrice";

const Initial = () => {
  const [links] = useState([
    "https://static.vecteezy.com/ti/vetor-gratis/p1/5868104-trabalho-em-equipe-moderno-plano-conceito-para-web-banner-design-man-analisa-dados-e-escreve-relatorio-financeiro-mulher-consultoria-e-ajuda-colega-trabalho-junto-ilustracao-com-cena-de-pessoas-isoladas-vetor.jpg",
    "https://static.vecteezy.com/ti/vetor-gratis/p1/5878295-digital-marketing-modern-flat-concept-for-web-banner-design-marketer-publish-advert-content-and-analyzes-data-promove-business-in-social-networks-vector-illustration-with-isolated-cena-de-pessoas-gratis-vetor.jpg",
    "https://static.vecteezy.com/ti/vetor-gratis/p1/5877709-online-pagamento-moderno-plano-conceito-para-web-banner-design-mulher-faz-transferencia-dinheiro-de-sua-conta-usando-aplicativo-e-homem-recebe-financas-ilustracao-com-cena-de-pessoas-isoladas-vetor.jpg",
  ]);

  const [contador, setContador] = useState(0);

  setTimeout(() => {
    if (contador === links.length - 1) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  }, 2000);

  return (
    <div id={styled.container}>
      <div id={styled.containerInfo}>
        <h1>Consultoria no ramo de Seguro Saúde e Seguro de Vida</h1>
        <p>
          Profissionais qualificados, atendimento personalizado e as melhores
          opções do mercado.
        </p>
        <ButtonPrice />
      </div>
      <div id={styled.containerImage}>
        <img src={links[contador]} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            width: 100,
          }}
        >
          {links.map((item, index) => {
            return (
              <>
                {index === contador ? (
                  <div
                    style={{
                      background: "white",
                      borderRadius: "50%",
                      border: "2px solid #070707",
                      width: 20,
                      height: 20,
                    }}
                  ></div>
                ) : (
                  <div
                    style={{
                      background: "black",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                    }}
                  ></div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Initial;
