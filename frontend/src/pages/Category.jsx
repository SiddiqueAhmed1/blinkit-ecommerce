import { useEffect, useState } from "react";
import CategoryUploadModal from "./CategoryUploadModal";
import Loader from "../common/Loader";
import axios from "axios";
import notFound from "../../public/nothing here yet.webp";

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
          <h1 className="font-semibold text-2xl">Add Category</h1>
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
        {categoryStore.length > 0 ? (
          <div className="bg-neutral-50 p-4 min-[375px]:grid-cols-2 min-[500px]:grid-cols-3 text-center my-5 grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4">
            {categoryStore.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="w-36 shadow-md rounded mb-5 border-b-4 border-red-500 hover:shadow-lg transition"
                  >
                    <img className="w-36" src={item.image} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center flex-col items-center gap-3">
            <img src={notFound} className="w-54" alt="" />
            <h1 className="text-xl font-semibold">No Category Found</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default Category;
