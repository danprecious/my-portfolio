export const getUserByEmail = async (email) => {
  const user = {
    email: process.env.NEXT_USER_EMAIL,
    password: process.env.NEXT_USER_PASSWORD,
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
 