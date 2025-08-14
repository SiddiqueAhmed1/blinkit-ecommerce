import axios from "axios";
import SummaryAPi from "./SummaryApi";

const fetchUserDetails = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5050/api/v1/user-details"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchUserDetails;
