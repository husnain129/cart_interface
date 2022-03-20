import { Container, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Cart from "../src/sections/cart";
import Details from "../src/sections/details";

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
        // direction={["column-reverse", "column-reverse", "row"]}
      >
        <Cart />
        <Details />
      </Flex>
    </Container>
  );
};

export default Home;
