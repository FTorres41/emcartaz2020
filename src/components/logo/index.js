import React from "react";
import { LogoContainer } from "./styled";

const LogoImage = ({className}) => {
  return (
    <LogoContainer>
      <div className={className} />
    </LogoContainer>
  );
};

export default LogoImage;
