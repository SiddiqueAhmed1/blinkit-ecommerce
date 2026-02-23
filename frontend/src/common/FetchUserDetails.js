import axios from "axios";
import { baseUrl } from "./SummaryApi";

const fetchUserDetails = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/user-details`);
    return response.data;
  } catch (error) {
    console.log("fetching error", error.error.data.message);
  }
};

export default fetchUserDetails;
