import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Details = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      w="full"
      h="full"
      p={5}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack alignItems={"flex-start"} spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>If the price is to hard on your eyes,</Text>
        <Button
          variant={"link"}
          colorScheme={secondaryTextColor}
          onClick={toggleColorMode}
        >
          Try changing the theme
        </Button>
      </VStack>
      <HStack spacing={6} alignItems="center" w={"full"}>
        <AspectRatio ratio={1} w={20}>
          <Image src="https://images.unsplash.com/photo-1549665948-8e1d3ef920b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <VStack w={"full"} alignItems="flex-start" spacing={0}>
            <Heading size={"md"}>Penny Board</Heading>
            <Text color={"gray.600"}>PYCOMP4324</Text>
          </VStack>
          <Heading size={"sm"} textAlign="end">
            $110.12
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w={"full"}>
        <HStack justifyContent={"space-between"}>
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size={"sm"}>$119</Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size={"sm"}>$19</Heading>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text color={secondaryTextColor}>Text</Text>
          <Heading size={"sm"}>$29</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent={"space-between"}>
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size={"md"}>$219</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Details;
