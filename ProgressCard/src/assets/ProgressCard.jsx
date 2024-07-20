import React,{useState} from 'react'
import { Box, Text, Divider, Progress, Stack } from "@chakra-ui/react";

function ProgressCard({heading1,progressValue,timeLeft}) {

  return (
    <div>
         <Stack spacing={5} mt="20" boxShadow='dark-lg'>
        <Text fontSize="2xl" fontWeight="bold">
          🕑 Next {heading1}
        </Text>
        <Progress colorScheme="green" height="72px" value={progressValue} />
        <Text fontSize="2xl" fontWeight="bold" textAlign="right">
        
          {timeLeft} left
        </Text>
      </Stack>

   
    </div>
  )
}

export default ProgressCard