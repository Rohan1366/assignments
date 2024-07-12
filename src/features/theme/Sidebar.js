import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';

function Sidebar() {
  return (
    <Box w="200px" bg="gray.100" h="100vh" p={4}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="lg" fontWeight="bold">Menu</Text>
        <Text>Home</Text>
        <Text>Schedule</Text>
        <Text>Recommendation</Text>
        <Text>Analytics</Text>
        <Text>Profile</Text>
        <Text>Inbox</Text>
        <Text>Themes</Text>
        <Text>Settings</Text>
      </VStack>
    </Box>
  );
}

export default Sidebar;
