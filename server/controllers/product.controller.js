import Product from "../models/product.model.js";

// Add a new product
export const addProduct = async (req, res) => {
  const { name, description, price, image, category } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
    });
    await newProduct.save();
    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding product", error: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving products", error: error.message });
  }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving product", error: error.message });
  }
};

export const searchProducts = async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  try {
    let query = {};

    if (category) {
      query.category = category;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }

    const products = await Product.find(query);

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
