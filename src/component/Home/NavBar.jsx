import React from "react";
import { Box, Flex, Heading } from "rebass";

const NavBar = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        height={"11vh"}
        backgroundColor={"#04364A"}
        color={"black"}
        padding={"0 1rem"}
      >
        <Heading as={"h5"} color={"#fff"} mr={"4rem"}>
          Music App
        </Heading>
        <Box flexGrow={1} />
      </Flex>

      <hr />
    </>
  );
};

export default NavBar;
