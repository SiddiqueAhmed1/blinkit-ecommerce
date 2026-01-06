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

    const addCategory = await categoryModel.create({
      name: categoryName,
      image,
    });

    return res.status(200).json({
      message: "Category uploaded done",
      success: true,
      error: false,
      data: addCategory,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update category
export const updateCategoryController = async (req, res) => {
  const { id, categoryName, image } = req.body;

  const updateCategory = await categoryModel.findByIdAndUpdate(
    id,
    { name: categoryName, image },
    { new: true }
  );

  res.status(200).json({
    message: "Category updated successfully",
    success: true,
    error: false,
    data: updateCategory,
  });
};

// delete category
export const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  const deleteCategory = await categoryModel.findByIdAndDelete(id);

  if (!deleteCategory) {
    res.status(400).json({
      message: "Category not deleted",
      success: false,
      error: true,
    });
  }

  res.status(200).json({
    message: "Category deleted succesfully",
    success: true,
    error: false,
    data: deleteCategory,
  });
};

export default addCategoryController;
