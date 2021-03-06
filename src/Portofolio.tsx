import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { Player } from "@lottiefiles/react-lottie-player";
import { ProjectCard } from "./components/ProjectCard";

export const Portofolio: React.FC<{}> = () => {
  return (
    <Stack minH="100vh" justify="center" align="center" spacing={0}>
      <Heading mb="20px">My projects</Heading>
      <Flex w="100%" justify="space-around" p="100px" align="center">
        <Stack w="500px" display={{ base: "none", md: "flex" }}>
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_QOeRfb.json"
          />
        </Stack>
        <Stack>
          <ProjectCard
            inProgress
            name="Dig-It"
            githubURL="https://github.com/Wallet-Finance-Manager/Wallet"
          />
          <ProjectCard
            name="Wallet"
            githubURL="https://github.com/DewinP/dig-it"
          />
        </Stack>
      </Flex>
    </Stack>
  );
};
