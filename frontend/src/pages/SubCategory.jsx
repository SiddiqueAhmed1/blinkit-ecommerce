import { useState } from "react";
import SubCategoryUploadModal from "./SubCategoryUploadModal";

const SubCategory = () => {
  const [openSubCategoryModal, setOpenSubCategoryModal] = useState(false);
  // const [subCategoryStore, setSubCategoryStore] = useState([]);

  return (
    <>
      <section onClick={() => setOpenSubCategoryModal(false)}>
        <div className="shadow p-2 rounded flex justify-between items-center gap-3 lg:gap-0">
          <h1 className="font-semibold text-2xl">Add Sub-Category</h1>
          <button
            onClick={() => setOpenSubCategoryModal(true)}
            className="border border-amber-300 px-4 py-3 rounded cursor-pointer hover:bg-amber-300 hover:text-green-600  font-semibold"
          >
            Add Sub-Category
          </button>
        </div>

        {openSubCategoryModal && <SubCategoryUploadModal />}
      </section>
    </>
  );
};

export default SubCategory;
