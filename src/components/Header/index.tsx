import React from "react";
import LogoImage from "../../../public/vercel.svg";

import { Container, Title, NextImage } from "./styles";

function Header() {
  return (
    <Container>
      <Title>Hello Word</Title>
      <NextImage
        src={LogoImage}
        alt="A logo braba da vercel"
        width={500}
        height={500}
      />
    </Container>
  );
}

export { Header };
