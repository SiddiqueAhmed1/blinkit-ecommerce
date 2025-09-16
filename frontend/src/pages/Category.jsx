import { useEffect, useState } from "react";
import CategoryUploadModal from "./CategoryUploadModal";
import Loader from "../common/Loader";
import axios from "axios";

const Category = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [categoryStore, setCategoryStore] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchCategory = async () => {
    try {
      setLoader(true);

      const response = await axios.get(
        "http://localhost:5050/category/get-category"
      );
      console.log("eita category page", response);

      if (response?.data?.success) {
        setCategoryStore(() => [...response.data.data]);
      }
    } catch (error) {
      console.log("get data error", error || error?.response?.data?.message);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      {loader ? <Loader /> : ""}
      <section>
        <div className="shadow p-2 rounded flex justify-between items-center ">
          <h1 className="font-semibold text-2xl">Category</h1>
          <button
            onClick={() => setOpenCategoryModal(true)}
            className="border border-amber-300 px-4 py-3 rounded cursor-pointer hover:bg-amber-300 hover:text-green-600  font-semibold"
          >
            Add Category
          </button>
        </div>

        {openCategoryModal && (
          <CategoryUploadModal
            fetchCategory={fetchCategory}
            close={() => setOpenCategoryModal(false)}
          />
        )}
        <div className="my-5 grid grid-cols-6">
          {categoryStore.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="w-32 h-48 bg-red-500 shadow-lg rounded"
                >
                  <img
                    className="w-32 object-scale-down"
                    src={item.image}
                    alt=""
                  />
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Category;
