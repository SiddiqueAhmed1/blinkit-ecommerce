import axios from "axios";

const fetchUserDetails = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/user-details`,
    );
    return response.data;
  } catch (error) {
    console.log("fetching error", error.error.data.message);
  }
};

export default fetchUserDetails;
