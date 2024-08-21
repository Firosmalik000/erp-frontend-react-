/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define types for the state and payload
interface User {
  // Define user properties here
  email: string;
  // other user properties
}

interface AuthState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

// Define initial state
const initialState: AuthState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Define the shape of the payload for loginUser thunk
interface LoginUserPayload {
  email: string;
  password: string;
}

// Define the loginUser thunk
export const loginUser = createAsyncThunk<User, LoginUserPayload, { rejectValue: string }>('user/loginUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post('https://deploy-test-node-plum.vercel.app/api/auth/login', user, { withCredentials: true });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const message = error.response.data.msg || 'Failed to login';
      return thunkAPI.rejectWithValue(message);
    }
    return thunkAPI.rejectWithValue('Failed to login');
  }
});

// Define the getMe thunk
// getMe
export const getMe = createAsyncThunk<User, void, { rejectValue: string }>('user/getMe', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://deploy-test-node-plum.vercel.app/api/auth/me', { withCredentials: true });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const message = error.response.data.msg || 'Failed to fetch user';
      return thunkAPI.rejectWithValue(message);
    }
    return thunkAPI.rejectWithValue('Failed to fetch user');
  }
});

// Define the logOut thunk
export const logOut = createAsyncThunk<void, void>('user/logOut', async () => {
  await axios.delete('https://deploy-test-node-plum.vercel.app/api/auth/logout');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || 'Login failed';
        state.user = null;
      });

    builder
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getMe.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || 'Failed to fetch user';
        state.user = null;
      });
  },
});

// Export the reset action
export const { reset } = authSlice.actions;
export default authSlice.reducer;
