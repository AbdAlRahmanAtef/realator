import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons//bs";
import { FiKey } from "react-icons/fi";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.jpg";

const Navbar = () => (
  <Flex py="2" px="4" borderBottom="1px" borderColor="gray.200" alignItems='center'>
    <Box>
      <Link href="/" paddingLeft="2" passHref>
        <Image
          width={60}
          height={60}
          borderRadius="50%"
          cursor="pointer"
          src={logo}
          alt=""
        />
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outlined"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}> Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
