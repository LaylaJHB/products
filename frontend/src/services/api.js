import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return null;
  }
};
