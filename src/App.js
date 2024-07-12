import React from 'react';
import { ChakraProvider, Box, Grid, GridItem } from '@chakra-ui/react';
import Sidebar from './features/theme/Sidebar';
import ThemeSelector from './features/theme/ThemeSelector';
import ProfilePreview from './features/theme/ProfilePreview';

function App() {
  return (
    <ChakraProvider>
      <Box bg="gray.100" color="black" minH="100vh">
        <Grid
          templateColumns={{ base: '1fr', md: '250px 1fr 1fr' }}
          templateRows={{ base: 'auto 1fr', md: 'auto 1fr' }}
          gap={4}
        >
          <GridItem rowSpan={2}>
            <Sidebar />
          </GridItem>
          <GridItem>
            <ThemeSelector />
          </GridItem>
          <GridItem rowSpan={2} colStart={3} alignSelf="end">
            <ProfilePreview />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
