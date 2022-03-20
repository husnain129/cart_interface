import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Cart = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w="full" h="full" p={5} spacing={7} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have and account, Click here to login</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={4} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input placeholder="Hunny" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Khan" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="Street.1 sahiwal comsats" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Sahiwal" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="sahiwal">Sahiwal</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Skardu">Skardu</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing</Checkbox>
        </GridItem>
        <GridItem colSpan={2} w="full">
          <Button
            variant="primary"
            // bg={"orange.300"}
            // _hover={{ bg: "orange.400" }}
            // _active={{ bg: "orange.500" }}
            _focus={{ outline: "none" }}
            w="full"
            size="lg"
          >
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Cart;
