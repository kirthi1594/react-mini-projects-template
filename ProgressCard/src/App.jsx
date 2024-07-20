import { useEffect, useState } from "react";
import { Box, Text, Divider, Progress, Stack } from "@chakra-ui/react";
import ProgressCard from "./assets/ProgressCard";

function App() {

  const [seconds,setSeconds] =useState(0)
  const [timeLeft, setTimeLeft] = useState(0);

  // let currentSeconds
  // useEffect(()=>{
  //   const currentTime = new Date();
  //   currentSeconds = currentTime.getSeconds();
  // },[])

  useEffect(()=>{
   
    setInterval(()=>{
      const currentTime = new Date();
      const currentSeconds = currentTime.getSeconds();
      // console.log(currentTime,"...", currentSeconds)
      setSeconds((currentSeconds / 60) * 100)

      setTimeLeft(60-currentSeconds)
    },1000)
  },[])


  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Box w="100%" mt="5" p="5" backgroundColor="darkgrey" fontSize="4xl" fontStyle="oblique">
        rpc
      </Box>
     <div style={{ width: "60%", margin: "auto" }}>
      
      <Text
        
        m="auto"
        mt="10"
        p="5"
        border="2px solid black"
        fontWeight="bold"
        textAlign="center"
        fontSize="4xl"
      >
        Progress Card
      </Text>
    
     <ProgressCard heading1={"minute"} progressValue={seconds} timeLeft={`${timeLeft} seconds`}/>
     <ProgressCard heading1={"hour"} progressValue={(new Date().getMinutes() / 60) * 100} timeLeft={`${60 - new Date().getMinutes()} minutes`} />
    </div>
    </div>
  );
}

export default App;
