import { useEffect, useState } from "react";
import CategoryUploadModal from "./CategoryUploadModal";
import axios from "axios";
import notFound from "../../public/nothing here yet.webp";
import swal from "sweetalert2";
import CategoryEditModal from "../Components/CategoryEditModal";
import Loader from "../common/Loader";

const Category = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [categoryStore, setCategoryStore] = useState([]);
  const [editCategoryModal, setEditCategoryModal] = useState(false);
  const [editCategoryData, setEditCategoryData] = useState({
    categoryName: "",
    image: "",
  });

  const [loader, setLoader] = useState(false);

  const fetchCategory = async () => {
    try {
      setLoader(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/category/get-category`,
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

  // handle delete category
  const handleCategoryDelete = (id) => {
    try {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then(async (result) => {
          try {
            if (result.isConfirmed) {
              await axios.delete(
                `${import.meta.env.VITE_API_URL}/category/delete-category/${id}`,
              );
              await fetchCategory();
              await swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          } catch (error) {
            console.log(error);
          }
        });
    } catch (error) {
      console.log("error category delete", error.message);
    }
  };

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
          <div className="bg-neutral-50 p-4 min-[375px]:grid-cols-2 min-[500px]:grid-cols-3 text-center my-5 grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 gap-4">
            {categoryStore.map((item) => {
              return (
                <>
                  <div
                    key={item._id}
                    className="w-full shadow-md rounded   p-3 hover:shadow-lg transition bg-white "
                  >
                    <img className="w-36 mx-auto" src={item.image} alt="" />
                    <div className="flex justify-center gap-2 ">
                      <button
                        onClick={() => {
                          setEditCategoryModal(true);
                          setEditCategoryData(item);
                        }}
                        className="bg-green-200 hover:bg-green-300 px-4 py-2 border border-green-200 rounded-md cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleCategoryDelete(item._id)}
                        className="bg-red-200 hover:bg-red-300 px-4 py-2 border border-red-200 rounded-md 
                      cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
            {editCategoryModal && (
              <CategoryEditModal
                editCategoryData={editCategoryData}
                setEditCategoryModal={setEditCategoryModal}
                fetchCategory={fetchCategory}
              />
            )}
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
