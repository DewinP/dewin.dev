import {
  Flex,
  Text,
  Stack,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { RiGithubLine, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";

export const Home: React.FC<{}> = () => {
  return (
    <Flex
      justify={{ base: "flex-end", md: "space-around" }}
      maxW="1000px"
      p="10px"
      align="center"
      minH="100vh"
      flexDir={{ base: "column-reverse", md: "row" }}
    >
      <Stack maxW="500px" spacing={4}>
        <Flex fontSize="40px" fontWeight="bold" wrap="wrap">
          <Text mr="10px">Hello, I'm</Text>
          <Text color="#dc6e1a">Dewin Pena</Text>
        </Flex>
        <Text fontWeight="semibold">
          I am Full-Stack web developer who loves coding and exploring. I'm
          currently looking forward for new opportunities where I can learn and
          make an impact.
        </Text>
        <ButtonGroup variant="ghost">
          <Link href="https://github.com/DewinP">
            <IconButton
              aria-label="github"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              icon={<RiGithubLine size="20px" />}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/dewinpena/">
            <IconButton
              aria-label="linkedin"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              icon={<RiLinkedinBoxFill size="20px" />}
            />
          </Link>
          <Link href="https://twitter.com/_deadwind">
            <IconButton
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              aria-label="twitter"
              icon={<RiTwitterFill size="20px" />}
            />
          </Link>
        </ButtonGroup>
        <a href="../public/resume.pdf" download>
          <Button justify="center" align="center" w="200px">
            <Text>Resume</Text>
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/private_files/lf30_ZrhaGL.json"
              style={{ width: "30px", height: "30px" }}
            />
          </Button>
        </a>
      </Stack>
      <Box boxSize={{ base: "300px", md: "500px" }}>
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/private_files/lf30_mqvces5q.json"
        />
      </Box>
    </Flex>
  );
};
