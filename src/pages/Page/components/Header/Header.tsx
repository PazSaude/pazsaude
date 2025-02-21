import React from "react";
import styled from "./styled.module.css";

const Header = () => {
  return (
    <div id={styled.container}>
      <div id={styled.containerImgLogo}>
        <img
          id={styled.imgLogo}
          src="https://www.pazsaude.com.br/images/logo-oficial-transparente_med.png"
          alt=""
        />
      </div>

      <div id={styled.containerOptions}>
        <ul id={styled.ulOptions}>
          <li>HOME</li>
          <li>BLOG</li>
          <li>QUEM SOMOS</li>
          <li>ONDE ESTAMOS</li>
          <li>FALE CONOSCO</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
