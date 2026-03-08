const SubCategoryUploadModal = ({ close }) => {
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
          <h1>sub category add</h1>
        </div>
      </section>
    </>
  );
};

export default SubCategoryUploadModal;
