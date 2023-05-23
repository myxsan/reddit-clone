import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth">
        <Image
          alt="google-logo"
          src="/images/googlelogo.png"
          height="20px"
          mr={4}
          onClick={() => signInWithGoogle()}
        />{" "}
        Continue with Google
      </Button>
      <Button variant="oauth">Some other provider</Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
