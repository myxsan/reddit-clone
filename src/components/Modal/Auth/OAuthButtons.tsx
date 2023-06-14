import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInError, setSignInError] = useState("");
  const handleSignInWithGoogle = () => {
    try {
      if (loading)
        throw new Error("Attempted to sign in with Google more than 1 at once");
      signInWithGoogle();
    } catch (error: any) {
      setSignInError(error);
      console.log("signInWithGoogle error:", error);
    }
  };

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" onClick={handleSignInWithGoogle}>
        <Image
          alt="google-logo"
          src="/images/googlelogo.png"
          height="20px"
          zIndex={1}
          mr={4}
        />{" "}
        Continue with Google
      </Button>
      {error && <Text>{signInError}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
