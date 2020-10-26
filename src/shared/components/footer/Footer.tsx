import React, { FC } from "react";
import { Wrapper, By, Name } from "./footer.styles";

type Props = {};

const Footer: FC<Props> = () => (
  <Wrapper>
    <By>Developed by</By> <Name>Agustin Ignacio Torra</Name>
    <p style={{ color: "white" }}>
      <a target="_blank" href="https://iconos8.es/icons/set/film-reel--v2">
        Favicon
      </a>{" "}
      thanks to{" "}
      <a target="_blank" href="https://iconos8.es">
        Icons8
      </a>
    </p>
  </Wrapper>
);

export default Footer;
