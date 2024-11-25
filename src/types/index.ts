export type ProductType = {
    id?: string
    createdAt?: string
    name: string
    price: number
    category: string
    productImage: string
}

export interface CartItemType extends ProductType {
	quantity: number;
}

export type UserType = {
	name: string;
	email: string;
	password: string;
	role: "ADMIN" | "USER";
};

export type MutationOptionsType = {
	id?: string;
	onSuccess: (data: any) => void;
	onError: (error: any) => void;
};

export type APIStatusType = { status: string; message: string };
