import axios from "axios";

const BASE_URL = "https://darktechteam.com/fts/api/users";

// Function to perform user login
export const loginApi = async (credentials: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, credentials);

    return response.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Login failed");
  }
};
