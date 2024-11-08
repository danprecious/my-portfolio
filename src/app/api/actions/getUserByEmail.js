export const getUserByEmail = async (email) => {
  const user = {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD,
  };

  console.log("at getUserEmail", user.email, user.password);

  try {
    if (user.email === email) {
      return user;
    } else {
      throw new Error("user not found");
    }
  } catch (error) {
    throw new Error(error);
  }
};
