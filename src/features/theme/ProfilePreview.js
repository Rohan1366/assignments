import React, { useState } from 'react';
import { Box, VStack, Input, Textarea, Image, Button, useBreakpointValue } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from './themeSlice';

function ProfilePreview() {
  const { profile, profileBackground, foreground } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');

  const handleChange = (field, value) => {
    dispatch(updateProfile({ [field]: value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const width = useBreakpointValue({ base: '100%', md: 'md' });
  const marginX = useBreakpointValue({ base: 'auto', md: '0' });

  return (
    <Box
      bg="white"
      color="black"
      padding="20px"
      borderRadius="md"
      boxShadow="md"
      width={width}
      mx={marginX}
      mt={{ base: 6, md: 0 }}
      mb={{ base: 4, md: 8 }}
    >
      <Box
        bg={profileBackground}
        height="150px"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="20px"
      >
        <Image
          borderRadius="full"
          boxSize="100px"
          src={profileImage}
          alt="Profile Picture"
          border={`5px solid ${foreground}`}
        />
      </Box>
      <VStack spacing={4} align="stretch">
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          mb={4}
        />
        <Input
          value={profile.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Name"
          variant="flushed"
          textAlign="center"
          fontWeight="bold"
        />
        <Input
          value={profile.designation}
          onChange={(e) => handleChange('designation', e.target.value)}
          placeholder="Designation"
          variant="flushed"
          textAlign="center"
        />
        <Input
          value={profile.location}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="Location"
          variant="flushed"
          textAlign="center"
        />
        <Textarea
          value={profile.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          placeholder="Biography"
          variant="flushed"
        />
      </VStack>
    </Box>
  );
}

export default ProfilePreview;
