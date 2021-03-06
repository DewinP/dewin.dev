import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Layout: React.FC<{}> = ({ children }) => {
  const [showAlert, setShowAlert] = useState(true);
  return (
    <Stack minWidth="100%">
      <Navbar />
      <Stack align="center">{children}</Stack>
      {showAlert && (
        <Alert
          justifyContent="center"
          status="warning"
          bottom={0}
          position="sticky"
          minW="100%"
        >
          <AlertIcon />
          <AlertTitle mr={2}>Thank you for visiting!</AlertTitle>
          <AlertDescription>This website is still in progress</AlertDescription>
          <CloseButton
            position="absolute"
            right="8px"
            onClick={() => setShowAlert(false)}
          />
        </Alert>
      )}
    </Stack>
  );
};
