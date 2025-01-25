export const validateSignUpForm = ({ name, username, email, password }) => {
  const errors = {};

  if (!name || name.trim() === "") errors.name = "Name is required.";
  if (!username || username.trim() === "")
    errors.username = "Username is required.";
  if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
    errors.email = "Invalid email format.";
  if (!password || password.length < 6)
    errors.password = "Password must be at least 6 characters long.";

  return errors;
};
