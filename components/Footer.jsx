import { Box, Flex, Text } from "@chakra-ui/react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.200"
  >
    {new Date().getFullYear()} <BiCopyright /> All rights reserved.
  </Flex>
);

export default Footer;
