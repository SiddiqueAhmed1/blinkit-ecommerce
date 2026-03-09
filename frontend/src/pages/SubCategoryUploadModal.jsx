import { useState } from "react";
import { MdClose } from "react-icons/md";
const SubCategoryUploadModal = ({ close }) => {
  const [data, setData] = useState({
    subCategoryName: "",
    image: "",
  });
  return (
    <>
      <section
        onClick={close}
        className=" bg-gray-400/60 fixed flex left-0 right-0 top-0 transition justify-center items-center bottom-0 "
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[500px] h-[400px] rounded p-4 bg-white  "
        >
          <div className=" flex justify-between ">
            <h1 className="text-lg font-semibold">Add Sub Category</h1>
            <button className="cursor-pointer" onClick={close}>
              <MdClose size={26} />
            </button>
          </div>
          <div className="py-3">
            <form action="">
              <input
                onChange={(e) => setData(e.target.value)}
                type="text"
                name="subCategoryName"
                value={data.subCategoryName}
                className="outline-none border border-neutral-300 p-3 rounded"
                placeholder="type you sub category"
              />
              <div>{data.image ? "" : ""}</div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubCategoryUploadModal;
