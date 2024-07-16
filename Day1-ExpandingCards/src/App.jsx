import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQ9CQjK8kox2iyII-QT96Qo6F2Wfp11Hkaw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HTgKkm-tBcNbiLG5eCL12nOngY_fEta2BA&s,",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStSMv9J0DOeTMmQ2OzbYYQnHhm84zsXSlZQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg6n3lgOYAk5I0a2sj6izi_Fw9O3WDVSaYfQ&s",
  ];

  function expandImage(ind) {
    setSelectedIndex(ind);
  }

  return (
    <Flex
      w="fit-content"
      h="500px"
      m="auto"
      p="10"
      gap="3"
      justifyContent="center"
      border="2px solid black"
  
      overflow="hidden"
    >
      {images.map((item, ind) => (
        <motion.div
          height="100%"
      
          key={ind}
          onClick={() => expandImage(ind)}
          animate={{ width: selectedIndex === ind ? "500px" : "100px" }}
          transition={{ duration: 0.5 }}
          style={{ overflow: "hidden", cursor: "pointer", borderRadius: '12px' }}
          >
          <img src={item} style={{ width: "100%", height: '100%', display: 'block', borderRadius:selectedIndex === ind ?"10px":"50px" }} />
          
        </motion.div>
      ))}
    </Flex>
  );
}

export default App;
