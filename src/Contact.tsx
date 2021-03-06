import {
  Stack,
  Heading,
  Input,
  Flex,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import React from "react";
export const Contact: React.FC<{}> = () => {
  const email = "dewinspena@gmail.com";
  const { hasCopied, onCopy } = useClipboard(email);
  return (
    <Stack justify="center" minH="100vh" align="center">
      <Heading fontWeight="semibold">Reach me at:</Heading>
      <Flex mb={2}>
        <Input value={email} isReadOnly w="210px" />
        <Tooltip hasArrow label={hasCopied ? "Copied" : "Copy"}>
          <IconButton
            aria-label="copy"
            icon={<HiOutlineClipboardCopy size="20px" />}
            onClick={onCopy}
            ml={2}
          />
        </Tooltip>
      </Flex>
    </Stack>
  );
};
