import { combineReducers } from "redux";

import userReducer from "./user";
import userDashboardReducer from "./userDashboard";
import adminDashboardReducer from "./adminDashboard";

export default combineReducers({
  user: userReducer,
  userDashboard: userDashboardReducer,
  adminDashboard: adminDashboardReducer,
});
