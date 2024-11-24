export type ProductType = {
    id?: string
    createdAt?: string
    name: string
    price: number
    category: string
    productImage: string
}

export type MutationOptionsType = {
	id?: string;
	onSuccess: (data: any) => void;
	onError: (error: any) => void;
};

export type APIStatusType = { status: string; message: string };
