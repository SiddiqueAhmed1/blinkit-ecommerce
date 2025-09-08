import { useState } from "react";
import CategoryUploadModal from "./CategoryUploadModal";

const Category = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  return (
    <>
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
          <CategoryUploadModal close={() => setOpenCategoryModal(false)} />
        )}
      </section>
    </>
  );
};

export default Category;
