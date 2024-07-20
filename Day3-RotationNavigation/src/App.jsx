import { useRef, useState } from "react";
// import "./App.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Flex, Box, Text } from "@chakra-ui/react";

function App() {
  const pageWrap = useRef();
  const pageRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    console.log("clicked on close");
    setIsOpen(false);
  };
  const handleOpen = () => {
    console.log("clicked on open");
    setIsOpen(true);
  };

  return (
    <>
      <Flex
        backgroundColor="blue.200"
        justifyContent="center"
        alignItems="center"
        w="100px"
        h="100px"
        borderRadius="50%"
        p="7"
        position={"absolute"}
        top={-10}
        zIndex={99}
        left={-10}
        sx={{
          transform: !isOpen ? "rotate(45deg)" : "rotate(-45deg)",
        }}
        transition={"all 0.5s ease"}
      >
        <Box position={"absolute"} bottom="0" onClick={handleClose}>
          <RxCross1 />
        </Box>
        <Box
          position={"absolute"}
          right="0"
          sx={{
            transform: "rotate(-45deg)",
          }}
          onClick={handleOpen}
        >
          <FaBars />
        </Box>
      </Flex>
      <Box
        ref={pageWrap}
        sx={{
          transform: isOpen ? "rotate(-5deg)" : "none",
        }}
        transition={"all 0.5s ease"}
      >
        <Flex
          ref={pageRef}
          p="10"
          bg="pink"
          sx={{
            transform: isOpen ? "translate(10px, -40px)" : "none",
          }}
          transition={"all 0.5s ease"}
          position={"absolute"}
          left={'-95px'}
          h={"100vh"}
        >
          <Flex bg={"grey"} p={"10px"} alignItems={'flex-end'}>
            some more icos
          </Flex>
          <Text as="h1" fontSize="4xl">
            Lebanon
          </Text>
          <Text as="i">Wikipedia</Text>
          <Text mt="5">
            {" "}
            The earliest evidence of civilization in Lebanon dates back more
            than seven thousand years, predating recorded history.[17] Lebanon
            was home to the Phoenicians, a maritime culture that flourished for
            almost three thousand years (c. 3200–539 BC). In 64 BC, the Roman
            Empire conquered the region, and eventually became one of its
            leading centers of Christianity. The Mount Lebanon range saw the
            emergence of a monastic tradition known as the Maronite Church.
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default App;
