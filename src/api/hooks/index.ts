import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { MutationOptionsType, ProductType } from "types/index";
import {
	createProduct,
	getProducts,
	updateProduct,
	deleteProduct,
} from "@api/services";

const productKey = "product";

export const useGetAllProducts = () => {
	const response = useQuery({
		queryKey: [productKey],
		queryFn: () => getProducts(),
	});

	return {
		isError: response.isError,
		isLoading: response.isLoading,
		isSuccess: response.isSuccess,
		data: response.data ? response.data : undefined,
	};
};

export const useCreateProduct = (options: MutationOptionsType) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (productData: ProductType) => createProduct(productData),
		onSuccess: (data: any) => {
			queryClient.invalidateQueries({
				queryKey: [productKey],
			});
			
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		create: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useUpdateProduct = (options: MutationOptionsType) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (productData: ProductType) =>
			updateProduct(options.id as string, productData),
		onSuccess: (data: any) => {
			queryClient.invalidateQueries({
				queryKey: [productKey],
			});
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		update: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};

export const useDeleteProduct = (options: MutationOptionsType) => {
	const queryClient = useQueryClient();
	
	const mutation = useMutation({
		mutationFn: () => deleteProduct(options.id as string),
		onSuccess: (data: any) => {
			queryClient.invalidateQueries({
				queryKey: [productKey],
			});
			options.onSuccess && options.onSuccess(data);
		},
		onError: (error: AxiosError) => {
			options.onError && options.onError(error);
		},
	});

	return {
		deleteProduct: mutation.mutate,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		isLoading: mutation.isPending,
	};
};
