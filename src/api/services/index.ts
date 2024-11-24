import { ProductType } from "types/index";
import axiosInstance from ".."

const {post, get, put} = axiosInstance;

export const getProducts = async () => {
    const response = await get("/products");
    return response.data
}

export const createProduct = async (payload: ProductType) => {
	const response = await post("/products", payload);
	return response.data;
};

export const updateProduct = async (id: string, payload: ProductType) => {
	const response = await put(`/products/${id}`, payload);
	return response.data;
};

export const deleteProduct = async (id: string) => {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response.data;
}
