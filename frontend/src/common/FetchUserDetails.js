import axios from "axios";

const fetchUserDetails = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5050/api/v1/user-details"
    );
    return response.data;
  } catch (error) {
    console.log("fetching error", error.error.data.message);
  }
};

export default fetchUserDetails;
