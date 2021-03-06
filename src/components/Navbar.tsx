import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { Link } from "react-scroll";

export const Navbar: React.FC<{}> = () => {
  return (
    <Fragment>
      <Flex
        h="50px"
        w="1000px"
        mx="auto"
        zIndex={2}
        top="0"
        position="sticky"
        justify="space-between"
        align="center"
        backgroundColor="white"
      >
        <Flex>
          <Heading color="black" cursor="pointer">
            dewin
            <Heading color="#dc6e1a" as="span">
              .dev
            </Heading>
          </Heading>
        </Flex>
        <ButtonGroup variant="ghost" size="sm" display="flex">
          <Link to="home" smooth={true} spy={true}>
            <Button>Home</Button>
          </Link>
          <Link to="portofolio" smooth={true} spy={true}>
            <Button>Portofolio</Button>
          </Link>
          <Link to="contact" smooth={true} spy={true}>
            <Button>Contact</Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </Fragment>
  );
};
