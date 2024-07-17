import React, { useEffect, useState } from "react";
import { Text, Flex, Button, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

function App() {
  const [border, setBorder] = useState(1);

  const handleIncrement = () => {
    setBorder((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setBorder((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <>
      <Flex
        // border="2px solid black"
        w="50%"
        m="auto"
        mt="40vh"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          textAlign="center"
          w="40px"
          h="40px"
          border={border >= 1 ? "4px solid blue" : "4px solid grey"}
          borderRadius="50%"
          fontSize="xl"
          transition="border 0.9s ease"
        >
          1
        </Text>
        <Flex
          // border={"1px solid"}
          bg="grey"
          w={"100px"}
          h={"7px"}
        >
          <Box
            bg="blue"
            transition="all 0.9s ease"
            w={border >= 2 ? "100%" : "0"}
          ></Box>
        </Flex>

        <Text
          textAlign="center"
          w="40px"
          h="40px"
          border={border >= 2 ? "4px solid blue" : "4px solid grey"}
          borderRadius="50%"
          fontSize="xl"
          transition="border 0.5s ease 0.5s"
        >
          2
        </Text>
        <Flex
          // border={"1px solid"}
          bg="grey"
          w={"100px"}
          h={"7px"}
        >
          <Box
            transition="all 0.9s ease"
            w={border >= 3 ? "100%" : "0"}
            bg="blue"
          ></Box>
        </Flex>
        <Text
          textAlign="center"
          w="40px"
          h="40px"
          border={border >= 3 ? "4px solid blue" : "4px solid grey"}
          borderRadius="50%"
          fontSize="xl"
          transition="border 0.5s ease 0.5s"
        >
          3
        </Text>
        <Flex
          // border={"1px solid"}
          bg="grey"
          w={"100px"}
          h={"7px"}
        >
          <Box
            bg="blue"
            transition="all 0.9s ease"
            w={border >= 4 ? "100%" : "0"}
          ></Box>
        </Flex>
        <Text
          textAlign="center"
          w="40px"
          h="40px"
          border={border >= 4 ? "4px solid blue" : "4px solid grey"}
          borderRadius="50%"
          fontSize="xl"
          transition="border 0.5s ease 0.5s"
        >
          4
        </Text>
      </Flex>
      <Flex w="30%" m="auto" mt="50px" justifyContent="space-between">
        <Button
          isDisabled={border === 1}
          p="7"
          fontSize="2xl"
          backgroundColor="blue.500"
          onClick={handleDecrement}
        >
          Prev
        </Button>
        <Button
          isDisabled={border === 4}
          p="7"
          fontSize="2xl"
          backgroundColor="blue.500"
          onClick={handleIncrement}
        >
          Next
        </Button>
      </Flex>
    </>
  );
}

export default App;
