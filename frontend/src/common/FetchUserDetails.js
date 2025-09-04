import axios from "axios";
import { toast } from "react-toastify";

const fetchUserDetails = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5050/api/v1/user-details"
    );
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export default fetchUserDetails;
