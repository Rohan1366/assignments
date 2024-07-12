import React from 'react';
import { Box, VStack, Text, Link } from '@chakra-ui/react';

function Sidebar() {
  return (
    <Box
      width={{ base: '100%', md: '250px' }}
      height={{ base: 'auto', md: '100vh' }}
      bg="gray.800"
      color="white"
      padding="20px"
    >
      <Text fontSize="2xl" fontWeight="bold" mb="20px">
        Logo Here
      </Text>
      <VStack align="stretch" spacing={4}>
        <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} padding="10px" borderRadius="md">
          Home
        </Link>
        <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} padding="10px" borderRadius="md">
          Schedule
        </Link>
        <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} padding="10px" borderRadius="md">
          Recommendations
        </Link>
        <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} padding="10px" borderRadius="md">
          Analytics
        </Link>
        <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} padding="10px" borderRadius="md">
          Profile
        </Link>
        <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} padding="10px" borderRadius="md">
          Inbox
        </Link>
        <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} padding="10px" borderRadius="md">
          Themes
        </Link>
        <Link href="#" _hover={{ textDecoration: 'none', bg: 'gray.700' }} padding="10px" borderRadius="md">
          Settings
        </Link>
      </VStack>
    </Box>
  );
}

export default Sidebar;
