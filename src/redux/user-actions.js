const { createAction } = require('@reduxjs/toolkit');

const updateUsers = createAction('UPDATE_USER');
const setOpenBurger = createAction('SET_OPEN_BURGER');
const toggleTheme = createAction('TOGGLE_THEME');

const actions = {
  updateUsers,
  setOpenBurger,
  toggleTheme,
};
export default actions;
