import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Mason Parker',
    designation: 'Graphics & UI/UX Designer',
    location: 'Denver, United States',
    bio: 'I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise...',
  },
  profileBackground: 'white',
  foreground: 'black',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setProfileBackground: (state, action) => {
      state.profileBackground = action.payload;
    },
    setForeground: (state, action) => {
      state.foreground = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { setProfileBackground, setForeground, updateProfile } = themeSlice.actions;

export default themeSlice.reducer;
