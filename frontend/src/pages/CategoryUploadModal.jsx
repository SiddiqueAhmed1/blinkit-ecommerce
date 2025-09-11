import { useState } from "react";
import { MdClose } from "react-icons/md";

const CategoryUploadModal = ({ close }) => {
  const [data, setData] = useState({
    categoryName: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="bg-neutral-800/60 absolute transition left-0 right-0 bottom-0 top-0 flex justify-center items-center ">
        <div className="bg-white md:w-[500px] w-[300px] sm:w-[380px] md:h-96 p-4 rounded">
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
              <div className="w-48 h-48 bg-neutral-200 flex justify-center items-center text-neutral-500 font-semibold">
                <p>No image found</p>
              </div>
              <div className="">
                <label htmlFor="categoryImageUpload">
                  <div
                    className={` ${
                      !data.categoryName
                        ? "bg-neutral-400 border border-neutral-400"
                        : "bg-amber-300 hover:bg-amber-400 cursor-pointer"
                    } border-amber-300 border px-3 py-2    rounded`}
                  >
                    Upload image
                  </div>
                  <input
                    disabled={!data.categoryName}
                    type="file"
                    id="categoryImageUpload"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CategoryUploadModal;
