import { applyMiddleware, legacy_createStore } from "redux";
import {
  ERROR_GITHUB_STATS,
  FETCH_GITHUB_STATS,
  LOADING_GITHUB_STATS,
} from "./actionTypes";
import {thunk} from "redux-thunk";

const initialState = {
  loading: true,
  data: [],
  error:{
    status: false,
    message: "",
  }
};

const githubStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_GITHUB_STATS:
      return { ...state, loading: true, error: {
        status: false,
        message: "",
      } };
    case FETCH_GITHUB_STATS:
      return { loading: false, data: payload, error: {
        status: false,
        message: "",
      } };
    case ERROR_GITHUB_STATS:
      return { loading: false, data: [], error: {
        status: true,
        message: payload,
      } };
    default:
      return state;
  }
};

export const store = legacy_createStore(githubStatsReducer, applyMiddleware(thunk));