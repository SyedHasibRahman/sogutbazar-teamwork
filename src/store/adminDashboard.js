import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  products: {
    productAdded: false,
  },
  banners: {
    allBanner: [],
    bannreAdded: false,
    editSlide: {},
  },
  makeAdmin: {
    adminAddSuccess: false,
  },
  users: {
    allUsers: [],
    usersLoading: false,
  },
  categories: {
    allCategories: [],
    categoriesLoading: false,
  },
};

const adminDashboard = createSlice({
  name: "adminDashbord",
  initialState,
  reducers: {
    // State change for successfully product added
    productAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.products.productAdded = true;
    },
    setProductAdded: (state, action) => {
      state.products.productAdded = action.payload.status;
    },
    // State chane for successfully banner added
    bannerAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.banners.bannreAdded = true;
    },
    setBannerAdded: (state, action) => {
      state.banners.bannreAdded = action.payload.status;
    },
    // Set All banner to banners.allBanner
    setAllBanner: (state, action) => {
      state.banners.allBanner = action.payload;
      state.loading = false;
    },
    // Delete a banner
    setDeleteBanner: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.banners.allBanner.findIndex(
          (bnr) => bnr._id === action.payload._id
        );
        state.banners.allBanner.splice(index, 1);
      }
    },
    setEditSlide: (state, action) => {
      state.banners.editSlide = state.banners.allBanner.find(
        (slide) => slide._id === action.payload._id
      );
    },
    setUpdateBanner: (state, action) => {
      if (action.payload.modifiedCount) alert("Slide Updated Successfully!");
    },
    // Make Admin Section
    makeAdminSuccess: (state, action) => {
      if (action.payload.modifiedCount > 0) {
        state.makeAdmin.adminAddSuccess = true;
        console.log(action.payload.modifiedCount);
      }
    },
    setMakeAdminStatus: (state, action) => {
      state.makeAdmin.adminAddSuccess = action.payload.status;
    },
    // Mange users section
    setUsersLoading: (state, action) => {
      state.users.usersLoading = true;
    },
    setUsers: (state, action) => {
      state.users.allUsers = action.payload;
      state.users.usersLoading = false;
    },
    setDeleteUser: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.users.allUsers.findIndex(
          (user) => user._id === action.payload._id
        );
        state.users.allUsers.splice(index, 1);
      }
    },
    // Manage Categories
    setCategoriesLoading: (state, action) => {
      state.categories.categoriesLoading = true;
    },
    setCategories: (state, action) => {
      state.categories.allCategories = action.payload;
      state.categories.categoriesLoading = false;
    },
    setAddCategory: (state, action) => {
      state.categories.allCategories.push(action.payload);
    },
    setDeleteCategory: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.categories.allCategories.findIndex(
          (user) => user._id === action.payload._id
        );
        state.categories.allCategories.splice(index, 1);
      }
    },
  },
});

export const {
  productAddedSuccess,
  setProductAdded,
  bannerAddedSuccess,
  setBannerAdded,
  setAllBanner,
  setDeleteBanner,
  setEditSlide,
  setUpdateBanner,
  makeAdminSuccess,
  setMakeAdminStatus,
  setUsersLoading,
  setUsers,
  setDeleteUser,
  setCategoriesLoading,
  setCategories,
  setAddCategory,
  setDeleteCategory
} = adminDashboard.actions;
export default adminDashboard.reducer;

// Action Creators

// Save Product to DB
export const addProductData = (data) =>
  apiCallBegan({
    url: "/products",
    method: "post",
    data,
    onSuccess: productAddedSuccess.type,
  });

// Load Banners form Database
export const loadBanners = () =>
  apiCallBegan({
    url: "/banners",
    onSuccess: setAllBanner.type,
  });

// Save Banner to DB
export const addBannerToDB = (data) =>
  apiCallBegan({
    url: "/banners",
    method: "post",
    data,
    onSuccess: bannerAddedSuccess.type,
  });

// Delee Banner
export const deleteBanner = (id) =>
  apiCallBegan({
    url: `/banners/${id}`,
    method: "delete",
    onSuccess: setDeleteBanner.type,
  });

// Update Banner
export const updateBanner = (data) =>
  apiCallBegan({
    url: "/banners",
    method: "put",
    data,
    onSuccess: setUpdateBanner.type,
  });

// Make an Admin
export const makeAdmin = (email) =>
  apiCallBegan({
    url: `/make-admin/${email}`,
    method: "put",
    onSuccess: makeAdminSuccess.type,
  });

/* ======================== MANAGE UERS START ======================*/
// Load Users
export const loeadUsers = () =>
  apiCallBegan({
    url: "/users",
    onStart: setUsersLoading.type,
    onSuccess: setUsers.type,
  });

  // Delete user
export const deleteUser = (id) =>
  apiCallBegan({
    url: `/users/${id}`,
    method: "delete",
    onSuccess: setDeleteUser.type,
  });


/* ======================== MANAGE UERS  END ======================*/

/* ======================== MANAGE CATEGORIES  START ======================*/
// Load Categories
export const loadCategories = () =>
  apiCallBegan({
    url: "/categories",
    onStart: setCategoriesLoading.type,
    onSuccess: setCategories.type,
  });

// Add Category do DB
export const addCategory = (data) =>
  apiCallBegan({
    url: "/categories",
    method: "post",
    data,
    onSuccess: setAddCategory.type,
  });

  // Delete Category
  export const deleteCategory = (id) =>
  apiCallBegan({
    url: `/categories/${id}`,
    method: "delete",
    onSuccess: setDeleteCategory.type,
  });

/* ======================== MANAGE CATEGORIES  END ======================*/
