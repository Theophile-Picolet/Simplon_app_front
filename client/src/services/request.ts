import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const getRandomBlague = async () => {
  try {
    const response = await axios.get(`${API}/api/random-blague`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getRandomBlague };
