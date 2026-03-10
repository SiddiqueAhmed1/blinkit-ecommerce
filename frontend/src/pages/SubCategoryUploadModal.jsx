import { useState } from "react";
import { MdClose } from "react-icons/md";
const SubCategoryUploadModal = ({ close }) => {
  const [subCategoryData, setSubCategoryData] = useState({
    subCategoryName: "",
    image: "",
    category: [],
  });

  // handleInput
  const handleInput = (e) => {
    const { name, value } = e.target;
    setSubCategoryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="bg-neutral-800/60 fixed flex left-0 bottom-0 right-0 top-0 transition justify-center items-center mt-10 lg:m-0">
        <div className="w-[500px] h-[450px] rounded p-4 bg-white  m-5">
          <div className=" flex justify-between ">
            <h1 className="text-lg font-semibold">Sub Category</h1>
            <button className="cursor-pointer" onClick={close}>
              <MdClose size={26} />
            </button>
          </div>
          <div className="py-3">
            <form action="">
              <input
                onChange={handleInput}
                type="text"
                name="subCategoryName"
                value={subCategoryData.subCategoryName}
                className="outline-none border border-neutral-300 p-3 rounded w-full mb-3"
                placeholder="Type sub-category"
              />
              {/* img upload section */}
              <div className="flex flex-col lg:flex-row items-center gap-3 justify-center mt-3">
                {subCategoryData.image ? (
                  <img src={subCategoryData.image} alt="" />
                ) : (
                  <div className="w-48 h-48 bg-neutral-200 text-neutral-500 flex justify-center items-center font-semibold">
                    No image found
                  </div>
                )}
                <label htmlFor="subCategoryImgUpload">
                  <div
                    className={` ${subCategoryData.subCategoryName ? "bg-amber-300 hover:bg-amber-400 border-amber-300 border cursor-pointer" : "bg-neutral-400 border-neutral-300 border"} px-3 py-2 rounded`}
                  >
                    Upload Image
                  </div>
                </label>
                <input
                  disabled={!subCategoryData.subCategoryName}
                  type="file"
                  id="subCategoryImgUpload"
                  className="hidden"
                />
              </div>
              <select name="" id="">
                <option value="">Select Category</option>
              </select>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubCategoryUploadModal;
