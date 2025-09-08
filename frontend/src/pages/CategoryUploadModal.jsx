import { MdClose } from "react-icons/md";

const CategoryUploadModal = ({ close }) => {
  return (
    <>
      <section className="bg-neutral-800/60 absolute transition left-0 right-0 bottom-0 top-0 flex justify-center items-center">
        <div className="bg-white w-96 h-60 p-4 rounded">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Category</h1>
            <button onClick={close} className="cursor-pointer">
              <MdClose size={26} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryUploadModal;
