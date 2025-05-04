import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  email: string;
  avatarUri: string;
}

const initialState: ProfileState = {
  name: '',
  email: '',
  avatarUri: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // Add a combined update function to update all profile data at once
    updateFullProfile: (
      state,
      action: PayloadAction<{name: string; email: string; avatarUri?: string}>,
    ) => {
      console.log('action.payload', action.payload);
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        // Only update avatarUri if provided
        ...(action.payload.avatarUri
          ? {avatarUri: action.payload.avatarUri}
          : {}),
      };
    },
    removeProfile: state => {
      // Reset the profile to initial state
      return initialState;
    },
  },
});

export const {updateFullProfile, removeProfile} = profileSlice.actions;
export default profileSlice.reducer;
