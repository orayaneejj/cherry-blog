import axios from "axios";

const API_URL = "https://blog-post-express.vercel.app/auth";

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.error);
    } else {
      throw new Error("Something went wrong. Please try again.");
    }
  }
};

export default {
  register,
};
