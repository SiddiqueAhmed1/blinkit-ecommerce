import { MdClose } from "react-icons/md";

const CategoryUploadModal = ({ close }) => {
  return (
    <>
      <section className="bg-neutral-800/60 absolute transition left-0 right-0 bottom-0 top-0 flex justify-center items-center">
        <div className="bg-white md:w-[500px] md:h-96 p-4 rounded">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Category</h1>
            <button onClick={close} className="cursor-pointer">
              <MdClose size={26} />
            </button>
          </div>
          <form className="grid my-3 gap-3">
            <input
              className="outline-none border border-neutral-300 p-3 rounded"
              id="categoryName"
              type="text"
              placeholder="Type product category"
            />
            <div className="lg:flex lg:gap-3 lg:items-center flex flex-col justify-center">
              <div className="w-48 h-48 mx-auto lg:m-0 bg-neutral-200 flex justify-center items-center text-neutral-600 font-semibold">
                No image found
              </div>
              <div className="flex justify-center mt-3">
                <button className=" border-amber-300 border px-3 py-2 cursor-pointer">
                  Upload image
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CategoryUploadModal;
