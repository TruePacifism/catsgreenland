const { createAction } = require('@reduxjs/toolkit');

const updateUsers = createAction('UPDATE_USER');

const actions = {
  updateUsers,
};
export default actions;
