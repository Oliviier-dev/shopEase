import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const response = await axios.post(`${API_URL}/api/v1/user/register`, {
    name,
    email,
    password,
  });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/v1/user/login`,
      { email, password },
      { withCredentials: true },
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data?.message || "Login failed. Please try again.";
  }
};
