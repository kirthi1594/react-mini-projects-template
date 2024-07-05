import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

function App() {
  const [isProgress, setIsProgress] = useState(0);
  const [checkedItem, setCheckedItem] = useState([]);
  const [item, setItem] = useState([
    { id: 1, text: "😊Be born", checkbox: false },
    { id: 2, text: "😊Say first words", checkbox: false },
    { id: 3, text: "😊Learn to read", checkbox: false },
    { id: 4, text: "😊Make a friend", checkbox: false },
    { id: 5, text: "😊Learn to ride a bike", checkbox: false },
    // { id: 6, text: "😊Read a book", checkbox: false },
    // { id: 7, text: "😊Learn to swim", checkbox: false },
    // { id: 8, text: "😊Finish elementary school", checkbox: false },
    // { id: 9, text: "😊Play a sport", checkbox: false },
    // { id: 10, text: "😊Fly in a plane", checkbox: false },
    // { id: 11, text: "😊Ride a boat", checkbox: false },
    // { id: 12, text: "😊Ride in a train", checkbox: false },
    // { id: 13, text: "😊Ride a helicopter", checkbox: false },
    // { id: 14, text: "😊See the ocean", checkbox: false },
    // { id: 15, text: "😊 See snow", checkbox: false },
    // { id: 16, text: "😊Make a snowman", checkbox: false },
    // { id: 17, text: "😊Finish middle school", checkbox: false },
    // { id: 18, text: "😊Go to a concert", checkbox: false },
    // { id: 19, text: "😊 Go camping", checkbox: false },
    // { id: 20, text: "😊Ride a rollercoaster", checkbox: false },
    // { id: 21, text: "🎻 Play an instrument", checkbox: false },
    // { id: 22, text: "💋 Get kissed", checkbox: false },
    // { id: 23, text: "💳 Get a credit card", checkbox: false },
    // { id: 24, text: "🚘 Start driving", checkbox: false },
    // { id: 25, text: "🗺️ Go on a roadtrip", checkbox: false },
    // { id: 26, text: "🗾 Visit another country", checkbox: false },
    // { id: 27, text: "🎤 Give a speech", checkbox: false },
    // { id: 28, text: "🏫 Graduate high school", checkbox: false },
    // { id: 29, text: "🌐 Learn another language", checkbox: false },
    // { id: 30, text: "💸 Invest some money", checkbox: false },
    // { id: 31, text: "📷 Meet an idol", checkbox: false },
    // { id: 32, text: "😩 Make a terrible mistake", checkbox: false },
    // { id: 33, text: "🏆 Win a trophy", checkbox: false },
    // { id: 34, text: "⛰️ Climb a mountain", checkbox: false },
    // { id: 35, text: "🎽 Run a marathon", checkbox: false },
    // { id: 36, text: "🍳 Learn to cook", checkbox: false },
  ]);

  const handleChange = (id) => {
    const updatedItems = item.map((e) => {
      return e.id === id ? { ...e, checkbox: !e.checkbox } : e;
    });

    setItem(updatedItems);
  };

  useEffect(() => {
    const updatedCheckedItems = item.filter((e) => e.checkbox);
    setCheckedItem(updatedCheckedItems);
  }, [item]);

  useEffect(() => {
    setIsProgress((checkedItem.length / item.length) * 100);
  }, [checkedItem]);

  return (
    <Box w="90%" m="auto">
      <Box
        style={{
          margin: "auto",
          border: "2px solid black",
          textAlign: "center",
          fontSize: "3vw",
          padding: "20px",
          fontWeight: "bolder",
        }}
      >
        Life Cheklist
      </Box>
      <SimpleGrid columns={[2, null, 4]} spacing={5} mt="5">
        {item.map((e) => {
          // console.log(e)
          return (
            <GridItem
              h="20"
              p="5"
              bg={e.checkbox ? "green.300" : "white"}
              color={e.checkbox ? "white" : "black"}
              key={e.id}
              border="2px solid black"
              style={{ alignContent: "center" }}
            >
              <Checkbox
                size="lg"
                colorScheme="green"
                p="1"
                isDisabled={e.id === item.length && checkedItem.length !== item.length-1}
                isChecked={e.checkbox && e.id === item.length && checkedItem.length !== item.length-1 }
                onChange={() => handleChange(e.id)}
              ></Checkbox>
              {e.text}
            </GridItem>
          );
        })}
      </SimpleGrid>
      <Progress
        h="50px"
        mt="10"
        mb="20"
        colorScheme="green"
        value={isProgress}
      />
    </Box>
  );
}

export default App;
