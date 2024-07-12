import React from 'react';
import { Box, VStack, SimpleGrid, Button, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setProfileBackground, setForeground } from './themeSlice';

const solidColors = [
  'red', 'blue', 'green', 'yellow', 'pink',
  'purple', 'orange', 'teal', 'cyan', 'black',
 
];

const linearGradients = [
  'linear-gradient(to right, red, yellow)',
  'linear-gradient(to right, blue, green)',
  'linear-gradient(to right, purple, pink)',
  'linear-gradient(to right, orange, teal)',
  'linear-gradient(to right, cyan, navy)',
  'linear-gradient(to right, lime, indigo)',
  'linear-gradient(to right, violet, gold)',
  'linear-gradient(to right, brown, grey)',
  'linear-gradient(to right, crimson, olive)',
  'linear-gradient(to right, black, silver)'
];

const radialGradients = [
  'radial-gradient(circle, red, yellow)',
  'radial-gradient(circle, blue, green)',
  'radial-gradient(circle, purple, pink)',
  'radial-gradient(circle, orange, teal)',
  'radial-gradient(circle, cyan, navy)',
  'radial-gradient(circle, lime, indigo)',
  'radial-gradient(circle, violet, gold)',
  'radial-gradient(circle, brown, grey)',
  'radial-gradient(circle, crimson, olive)',
  'radial-gradient(circle, black, silver)'
];

function ThemeSelector() {
  const dispatch = useDispatch();

  return (
    <Box padding="20px">
        <Text fontWeight="bold" fontSize="40px">Themes</Text>
      <VStack spacing={4} align="stretch">
        <Text fontWeight="bold">Solids</Text>
        <SimpleGrid columns={5} spacing={2}>
          {solidColors.map((color) => (
            <Button
              key={color}
              bg={color}
              height="40px"
              onClick={() => dispatch(setProfileBackground(color))}
            />
          ))}
        </SimpleGrid>
        
        <Text fontWeight="bold">Linear Gradients</Text>
        <SimpleGrid columns={5} spacing={2}>
          {linearGradients.map((gradient) => (
            <Button
              key={gradient}
              bgImage={gradient}
              bgSize="cover"
              height="40px"
              onClick={() => dispatch(setProfileBackground(gradient))}
            />
          ))}
        </SimpleGrid>
        
        <Text fontWeight="bold">Radial Gradients</Text>
        <SimpleGrid columns={5} spacing={2}>
          {radialGradients.map((gradient) => (
            <Button
              key={gradient}
              bgImage={gradient}
              bgSize="cover"
              height="40px"
              onClick={() => dispatch(setProfileBackground(gradient))}
            />
          ))}
        </SimpleGrid>
        
        <Text fontWeight="bold">Foreground Color</Text>
        <SimpleGrid columns={5} spacing={2}>
          {solidColors.map((color) => (
            <Button
              key={color}
              bg={color}
              height="40px"
              onClick={() => dispatch(setForeground(color))}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
}

export default ThemeSelector;
