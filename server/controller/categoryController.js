import categoryModel from "../Models/categoryModel.js";

// get category
export const getCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.find();

    if (!category) {
      return res.status(400).json({
        message: "Category not found",
        success: true,
        error: false,
      });
    }

    return res.status(200).json({
      message: "Category get succesfull",
      success: true,
      error: false,
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

// add category
const addCategoryController = async (req, res) => {
  try {
    const { categoryName, image } = req.body;
    const id = req.user.id;

    const updateCategory = await categoryModel.create({
      name: categoryName,
      image,
    });

    return res.status(200).json({
      message: "Category uploaded done",
      success: true,
      error: false,
      data: updateCategory,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default addCategoryController;
