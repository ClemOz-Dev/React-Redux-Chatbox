// === action types
export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_USER = 'SET_USER';

// === action creators
export const updateInputMessage = (newValue) => ({
  type: UPDATE_INPUT_MESSAGE,
  value: newValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const toggleMenu = () => ({
  type: 'TOGGLE_MENU',
});

export const setEmail = (newValue) => ({
  type: SET_EMAIL,
  value: newValue,
});

export const setPassword = (newValue) => ({
  type: SET_PASSWORD,
  value: newValue,
});
export const setUser = () => ({
  type: SET_USER, 
});
