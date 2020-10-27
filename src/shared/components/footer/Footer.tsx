import React, { FC } from "react";
import { Wrapper, By, Name, Reference, Link } from "./footer.styles";

type Props = {};

const Footer: FC<Props> = () => (
  <Wrapper>
    <By>Developed by</By> <Name>Agustin Ignacio Torra</Name>
    <Reference>
      <Link target="_blank" href="https://iconos8.es/icons/set/film-reel--v2">
        Favicon
      </Link>{" "}
      thanks to{" "}
      <Link target="_blank" href="https://iconos8.es">
        Icons8
      </Link>
    </Reference>
  </Wrapper>
);

export default Footer;
