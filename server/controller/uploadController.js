const uploadImageController = async (req, res) => {
  try {
    const file = req.file;
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};

export default uploadImageController;
