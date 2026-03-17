import { useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import uploadImage from "../common/uploadImage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEditCategory } from "../features/productSlice";

const CategoryEditModal = ({ setEditCategoryModal, editCategoryData }) => {
  const [imgLoader, setImgLoader] = useState(false);
  const [categoryUpdateLoader, setCategoryUpdateLoader] = useState(false);
  const dispatch = useDispatch();

  const [categoryData, setCategoryData] = useState({
    id: editCategoryData._id,
    categoryName: editCategoryData.name,
    image: editCategoryData.image,
  });

  // handle form submition
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      categoryData.categoryName === editCategoryData.categoryName ||
      categoryData.image === editCategoryData.image
    ) {
      return toast.error("One or more fields value must be change", {
        position: "top-center",
        autoClose: 1500,
      });
    }

    try {
      setCategoryUpdateLoader(true);
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/category/update-category`,
        categoryData,
      );
      console.log("edit category from edit modal", response?.data?.data);
      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 1500,
        });
        setEditCategoryModal(false);
        dispatch(setEditCategory(response?.data?.data));
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 1500,
      });
    } finally {
      setCategoryUpdateLoader(false);
    }
  };

  // handle input field
  const handleInput = (e) => {
    const { name, value } = e.target;

    setCategoryData((prevState) => ({
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
        setCategoryData((prevState) => ({
          ...prevState,
          image: upload,
        }));
        toast.success("Image uploaded successfull", {
          position: "top-center",
          autoClose: 500,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 1500,
      });
    } finally {
      setImgLoader(false);
    }
  };

  return (
    <>
      <section className="bg-neutral-800/60 fixed transition left-0 right-0 bottom-0 top-0 flex justify-center items-center ">
        <div className="bg-white md:w-[500px] w-[300px] sm:w-[380px] md:h-[400px] p-4 rounded">
          <div className="flex justify-between ">
            <h1 className="text-lg font-semibold">Edit Category</h1>
            <button
              onClick={() => setEditCategoryModal(false)}
              className="cursor-pointer"
            >
              <MdClose size={26} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="grid my-3 gap-3">
            <input
              name="categoryName"
              value={categoryData.categoryName}
              onChange={handleInput}
              className="outline-none border border-neutral-300 p-3 rounded"
              id="categoryName"
              type="text"
              placeholder="Type product category"
            />

            <div className="flex flex-col justify-center items-center gap-3 md:flex md:flex-row md:justify-center md:gap-3 md:items-center my-3">
              {categoryData.image ? (
                <div className="w-48 h-48 border border-amber-500 bg-white flex justify-center items-center text-neutral-500 font-semibold">
                  <img
                    className="w-full h-full object-contain"
                    src={categoryData.image}
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
                      !categoryData.categoryName
                        ? "bg-neutral-400 border border-neutral-400"
                        : "bg-amber-300 hover:bg-amber-400 cursor-pointer"
                    } border-amber-300 border px-3 py-2    rounded`}
                  >
                    {imgLoader && categoryData.categoryName
                      ? "Uploading..."
                      : categoryData.image && categoryData
                        ? "Change image"
                        : "Upload image"}
                  </div>
                  <input
                    onChange={handleCategoryImgUpload}
                    disabled={!categoryData.categoryName}
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
              {categoryUpdateLoader ? "Updating..." : "Update Category"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CategoryEditModal;
