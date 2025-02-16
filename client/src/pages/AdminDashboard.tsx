import React, { useState, useEffect } from "react";
import { FiPlusCircle, FiTrash2, FiGrid, FiX, FiPackage, FiUsers, FiBarChart2 } from "react-icons/fi";
import bgImage1 from "../assets/premium_photo-1675186049366-64a655f8f537.avif";
import bgImage2 from "../assets/premium_photo-1677187301660-5e557d9c0724.avif";
import bgImage3 from "../assets/airpods-max-select-silver-202011.jpeg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Dashboard: React.FC = () => {
  const { isAuthenticated, userData, loading } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["Widgets", "Clothes", "Books"];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; 

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      navigate("/login");
    } else if (userData?.role === "user") {
      navigate("/");
    } else if (userData?.role !== "admin" && userData?.role !== "superadmin") {
      navigate("/login");
    }
  }, [isAuthenticated, userData, navigate, loading]);

  // Simulate fetching data 
  useEffect(() => {
    const dummyData: Product[] = [
      {
        id: "1",
        name: "Widget A",
        price: 19.99,
        category: "Widgets",
        description: "A high-quality widget.",
        image: bgImage1,
      },
      {
        id: "2",
        name: "Clothing B",
        price: 29.99,
        category: "Clothes",
        description: "A stylish piece of clothing.",
        image: bgImage2,
      },
      {
        id: "3",
        name: "Book C",
        price: 15.99,
        category: "Books",
        description: "An interesting book to read.",
        image: bgImage3,
      },
      {
        id: "4",
        name: "Widget D",
        price: 25.99,
        category: "Widgets",
        description: "A high-quality widget.",
        image: bgImage1,
      },
      {
        id: "5",
        name: "Clothing E",
        price: 35.99,
        category: "Clothes",
        description: "A stylish piece of clothing.",
        image: bgImage2,
      },
      {
        id: "6",
        name: "Book F",
        price: 20.99,
        category: "Books",
        description: "An interesting book to read.",
        image: bgImage3,
      },
      {
        id: "7",
        name: "Widget G",
        price: 45.99,
        category: "Widgets",
        description: "A high-quality widget.",
        image: bgImage1,
      },
      {
        id: "8",
        name: "Clothing H",
        price: 55.99,
        category: "Clothes",
        description: "A stylish piece of clothing.",
        image: bgImage2,
      },
      {
        id: "9",
        name: "Book I",
        price: 50.99,
        category: "Books",
        description: "An interesting book to read.",
        image: bgImage3,
      },
      {
        id: "10",
        name: "Widget J",
        price: 10.99,
        category: "Widgets",
        description: "A high-quality widget.",
        image: bgImage1,
      },
    ];
    setProducts(dummyData);
  }, []);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, 4);
      setImages(files);
    }
  };

  // Handle form submission
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      id: Math.random().toString(36).substring(2, 9),
      name: productName,
      price: parseFloat(price),
      category,
      description,
      image: images.length > 0 ? URL.createObjectURL(images[0]) : "",
    };
    setProducts([...products, newProduct]);
    setProductName("");
    setPrice("");
    setCategory("Electronics");
    setDescription("");
    setImages([]);
    setIsOpen(false);
  };

  // Handle product deletion
  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }  

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-500 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <FiGrid /> Products
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <FiPackage /> Orders
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <FiUsers /> Users
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <FiBarChart2 /> Reports
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Products</h1>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-blue-700"
          >
            <FiPlusCircle /> Add New Product
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 md:h-64 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="w-full justify-center mt-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 flex items-center space-x-2"
                >
                  <FiTrash2 className="w-5 h-5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Custom Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
            <form onSubmit={handleAddProduct}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  className="mt-1 block w-full p-2 border rounded-md"
                  accept="image/*"
                  required
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
