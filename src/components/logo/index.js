import React from "react";
import { LogoContainer } from "./styled";
// import Logo from "../../assets/logo_emcartaz.png";
// import LogoAmarelo from "../../assets/logo_emcartaz_amarelo.png";
// import LogoAzul from "../../assets/logo_emcartaz_azul.png";
// import LogoAzulClaro from "../../assets/logo_emcartaz_azul_claro.png";
// import LogoLaranja from "../../assets/logo_emcartaz_laranja.png";
// import LogoMarrom from "../../assets/logo_emcartaz_marrom.png";
// import LogoRosa from "../../assets/logo_emcartaz_rosa.png";
// import LogoRoxo from "../../assets/logo_emcartaz_roxo.png";
// import LogoVerde from "../../assets/logo_emcartaz_verde.png";
// import LogoVerdeClaro from "../../assets/logo_emcartaz_verde_claro.png";
// import LogoVermelho from "../../assets/logo_emcartaz_vermelho.png";

const LogoImage = ({className}) => {
  return (
    <LogoContainer>
      {/* <img src={Logo} alt="Em Cartaz" /> */}
      <div className={className} />
    </LogoContainer>
  );
};

export default LogoImage;
