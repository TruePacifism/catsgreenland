const { createAction } = require('@reduxjs/toolkit');

const updateUsers = createAction('UPDATE_USER');
const setOpenBurger = createAction('SET_OPEN_BURGER');

const actions = {
  updateUsers,
  setOpenBurger,
};
export default actions;
