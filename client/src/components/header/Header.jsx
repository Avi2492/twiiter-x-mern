import React from "react";
import Logo from "../logo/Logo";
import { Flex, Image, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
      <Flex onClick={toggleColorMode} cursor={"pointer"}>
        <Logo />
      </Flex>
    </Flex>
  );
};

export default Header;
