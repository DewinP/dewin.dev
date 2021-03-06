import { Flex, Box, Text } from "@chakra-ui/layout";
import {
  ButtonGroup,
  Stack,
  IconButton,
  Tag,
  TagLeftIcon,
  TagLabel,
  Link,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { BiLinkExternal } from "react-icons/bi";
import { RiGithubLine, RiHammerFill } from "react-icons/ri";
import React from "react";

interface ProjectCardProps {
  name: string;
  inProgress?: boolean;
  deployedURL?: string;
  githubURL: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  inProgress,
  deployedURL,
  githubURL,
}) => {
  console.log(deployedURL);
  return (
    <Stack
      minW={{ base: "300px" }}
      maxW="400px"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      p="5px"
    >
      <Box backgroundColor="red">
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_i9ltkgef.json"
        />
      </Box>
      <Flex justify="space-between" align="center">
        <Flex>
          <Text fontWeight="bold" mr="10px">
            {name}
          </Text>
          {inProgress && (
            <Tag size="sm" variant="subtle" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={RiHammerFill} />
              <TagLabel>In progress</TagLabel>
            </Tag>
          )}
        </Flex>
        <ButtonGroup size="sm" spacing="0px" variant="ghost">
          <Link href={githubURL}>
            <IconButton
              aria-label="Visit Github"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              icon={<RiGithubLine size="20px" />}
            />
          </Link>
          {deployedURL !== undefined ?? (
            <Link href={deployedURL}>
              <IconButton
                boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                aria-label="Visit demo"
                icon={<BiLinkExternal size="20px" />}
              />
            </Link>
          )}
        </ButtonGroup>
      </Flex>
    </Stack>
  );
};
