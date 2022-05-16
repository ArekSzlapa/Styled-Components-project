import React from "react";
import Container from "./styles/Container.styles";
import { HeaderStyled } from "./styles/Header.styled";
import { Nav, Logo } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import { Image } from "./styles/Header.styled";

export default function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free!</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the Community that your fans will love!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              rerum deleniti sequi in omnis, quae iure animi voluptatum ducimus
              optio magnam delectus libero, minima, aliquam ab excepturi
              eveniet? Sapiente, voluptatem.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started for free!
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </HeaderStyled>
  );
}
