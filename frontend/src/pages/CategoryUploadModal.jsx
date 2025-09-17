import { useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import uploadImage from "../common/uploadImage";
import axios from "axios";

const CategoryUploadModal = ({ close, fetchCategory }) => {
  const [imgLoader, setImgLoader] = useState(false);
  const [categoryUploadLoader, setCategoryUploadLoader] = useState(false);

  const [data, setData] = useState({
    categoryName: "",
    image: "",
  });

  // handle form submition
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.categoryName || !data.image) {
      return toast.error("All fields are required", {
        position: "top-center",
      });
    }

    try {
      setCategoryUploadLoader(true);
      const response = await axios.post(
        "http://localhost:5050/category/add-category",
        data
      );

      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-center",
        });
        close();
        fetchCategory();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setCategoryUploadLoader(false);
    }
  };

  // handle input field
  const handleInput = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // image upload handler
  const handleCategoryImgUpload = async (e) => {
    try {
      const file = e.target.files[0];

      if (!file) {
        return;
      }
      setImgLoader(true);
      const upload = await uploadImage(file);

      if (upload) {
        setData((prevState) => ({
          ...prevState,
          image: upload,
        }));
        toast.success("Image uploaded successfull", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setImgLoader(false);
    }
  };

  return (
    <>
      <section className="bg-neutral-800/60 absolute transition left-0 right-0 bottom-0 top-0 flex justify-center items-center ">
        <div className="bg-white md:w-[500px] w-[300px] sm:w-[380px] md:h-[400px] p-4 rounded">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Category</h1>
            <button onClick={close} className="cursor-pointer">
              <MdClose size={26} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="grid my-3 gap-3">
            <input
              name="categoryName"
              value={data.categoryName}
              onChange={handleInput}
              className="outline-none border border-neutral-300 p-3 rounded"
              id="categoryName"
              type="text"
              placeholder="Type product category"
            />

            <div className="flex flex-col justify-center items-center gap-3 md:flex md:flex-row md:justify-center md:gap-3 md:items-center my-3">
              {data.image ? (
                <div className="w-48 h-48 bg-neutral-200 flex justify-center items-center text-neutral-500 font-semibold">
                  <img
                    className="w-full h-full object-cover"
                    src={data.image}
                    alt=""
                  />
                </div>
              ) : (
                <div className="w-48 h-48 bg-neutral-200 flex justify-center items-center text-neutral-500 font-semibold">
                  <p>No image found</p>
                </div>
              )}

              <div className="">
                <label htmlFor="categoryImageUpload">
                  <div
                    className={` ${
                      !data.categoryName
                        ? "bg-neutral-400 border border-neutral-400"
                        : "bg-amber-300 hover:bg-amber-400 cursor-pointer"
                    } border-amber-300 border px-3 py-2    rounded`}
                  >
                    {imgLoader && data.categoryName
                      ? "Uploading..."
                      : data.image && data
                      ? "Change image"
                      : "Upload image"}
                  </div>
                  <input
                    onChange={handleCategoryImgUpload}
                    disabled={!data.categoryName}
                    type="file"
                    id="categoryImageUpload"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-amber-400 px-4 py-2 rounded font-semibold cursor-pointer"
            >
              {categoryUploadLoader ? "Uploading..." : "Upload Category"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CategoryUploadModal;
