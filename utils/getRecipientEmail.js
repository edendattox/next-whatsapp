const getRecipientEmail = (users, userLoggedIn) =>
  users?.filter((userToFilter) => userTOFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;
