import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

function App() {
  const [blurImg, setBlurImg] = useState(5);
  const [numberImg, setnumberImg] = useState(0);

  useEffect(() => {
    const blurInterval= setInterval(() => {
      setBlurImg((blur) =>{
        if(blur<=0){
        clearInterval(blurInterval)
        return blur
        }
       return blur - 0.1});
      
    }, 40);
    return () => clearInterval(blurInterval)
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setnumberImg((num) => {
        if (num >= 100) {
          clearInterval(intervalId);
        
          return num;
        }

        return num + 1;
      });
    }, 20);
    return () => clearInterval(intervalId); // Cleanup interval on unmount

  }, []);

  return (
    <div
  
      style={{
        backgroundImage:
          "url(https://wallpapers.com/images/high/yellow-house-and-greenery-best-hd-h5hf3cmcwkls52wo.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: `blur(${blurImg}px)`,
        height: "100vh", // or any other height you need
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text fontSize={"8xl"}>Loading Image...</Text> */}
      <Text fontSize={"5xl"} color={"white"}>
        {numberImg==100?"":`Loading Image...${numberImg}%`}
        
      </Text>
    </div>
  );
}

export default App;
