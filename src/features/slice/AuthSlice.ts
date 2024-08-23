/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  email: string;
}

interface AuthState {
  user: User | null | any;
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

interface LoginUserPayload {
  email: string;
  password: string;
}

// Define the loginUser thunk
export const loginUser = createAsyncThunk<User, LoginUserPayload, { rejectValue: string }>('user/loginUser', async (user, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', user, { withCredentials: true });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      const message = error.response.data.msg || 'Failed to login';
      return thunkAPI.rejectWithValue(message);
    }
    return thunkAPI.rejectWithValue('Failed to login');
  }
});

export const getMe = createAsyncThunk<User, void, { rejectValue: string }>('user/getMe', async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:5000/api/auth/me', { withCredentials: true });
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
  await axios.delete('http://localhost:5000/api/auth/logout');
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
