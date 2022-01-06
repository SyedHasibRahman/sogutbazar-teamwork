import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  userInfo: {},
  loading: false,
  error: "",
  apiResponse: {},
  admin: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setUser: (state, action) => {
      const { email, displayName, photoURL } = action.payload;
      state.userInfo.displayName = displayName;
      state.userInfo.email = email;
      state.userInfo.photoURL = photoURL;
      state.loading = false;
    },
    setAuthError: (state, action) => {
      state.error = action.payload.error;
    },
    addUserToDB: (state, action) => {
      state.apiResponse = action.payload;
    },
    setAdminStatus: (state, action) => {
      state.admin = action.payload.admin;
    },
  },
}); 

export const {
  setUser,
  setLoading,
  setAuthError,
  addUserToDB,
  setAdminStatus,
} = user.actions;
export default user.reducer;

// Action Creators
const url = "/users";

// Add new user to db for registration using email and password
export const saveUserToDB = (data) =>
  apiCallBegan({
    url,
    data,
    method: "post",
    onSuccess: addUserToDB.type,
  });

// Update (upsert) user info to db for Google Login
export const upsertUser = (data) =>
  apiCallBegan({
    url,
    data,
    method: "put",
    onSuccess: addUserToDB.type,
  });

// Check an user role is admin or not
export const checkAdminStatus = (email) =>
  apiCallBegan({
    url: url + "/" + email,
    onSuccess: setAdminStatus.type,
  });
