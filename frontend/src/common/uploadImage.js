import axios from "axios";

const uploadImage = async (image) => {
  const formdata = new FormData();
  formdata.append("image", image);
  try {
    const response = await axios.post(
      "http://localhost:5050/uploads/upload-img",
      formdata
    );

    return response.data.image;
  } catch (error) {
    console.log("tomar vul eikhan a", error);
  }
};

export default uploadImage;
