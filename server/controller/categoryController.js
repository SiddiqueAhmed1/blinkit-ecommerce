import categoryModel from "../Models/categoryModel.js";

const addCategoryController = async (req, res) => {
  try {
    const { categoryName, image } = req.body;
    const id = req.user.id;

    const categoryUpload = await categoryModel.findByIdAndUpdate(
      id,
      {
        name: categoryName,
        image,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Category uploaded done",
      success: true,
      error: false,
      data: categoryUpload,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default addCategoryController;
