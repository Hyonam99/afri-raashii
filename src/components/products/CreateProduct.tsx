import { useCreateProduct, useUpdateProduct } from "@api/hooks";
import AlertBar, { AlertBarStatusType } from "@components/app/Alertbar";
import { useState } from "react";
import { productCategories } from "src/data";
import { APIStatusType, ProductType } from "types/index";

const CreateProductForm = ({
	initialData,
	onEditComplete,
}: {
	initialData?: ProductType;
	onEditComplete?: () => void;
}) => {
	const [placeholder, setPlaceholder] = useState<string>("select a category");
	
	const [formValues, setFormValues] = useState<ProductType>({
		createdAt: new Date().toISOString(),
		name: initialData?.name || "",
		category: initialData?.category || "",
		productImage: initialData?.productImage || "",
		price: initialData?.price || 0,
	});
	const [apiStatus, setApiStatus] = useState<APIStatusType | undefined>();

	const { create, isLoading } = useCreateProduct({
		onSuccess: () => {
			setApiStatus({
				status: "success",
				message: "Product created successfully",
			});
			setFormValues({
				createdAt: new Date().toISOString(),
				name: "",
				category: "",
				productImage: "",
				price: 0,
			});
		},
		onError: () => {
			setApiStatus({
				status: "error",
				message: "unable to create product",
			});
		},
	});

	const { update, isLoading: isUpdating } = useUpdateProduct({
		id: initialData?.id,
		onSuccess: () => {
			setApiStatus({
				status: "success",
				message: "Product created successfully",
			});

			setTimeout(() => {
				setFormValues({
					createdAt: new Date().toISOString(),
					name: "",
					category: "",
					productImage: "",
					price: 0,
				});
				onEditComplete && onEditComplete();
			}, 2000)
			
		},
		onError: () => {
			setApiStatus({
				status: "error",
				message: "unable to update product",
			});
		},
	});

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLInputElement>
	) => {
		const formName = e.target.name as keyof ProductType;

		if (formName === "price") {
			setFormValues((prev) => {
				return { ...prev, [formName]: Number(e.target.value) };
			});
		} else {
			setFormValues((prev) => {
				return { ...prev, [formName]: e.target.value };
			});
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (initialData) {
			update({ ...formValues, id: initialData.id });
		} else {
			create(formValues);
		}
	};

	return (
		<>
			<AlertBar
				isOpen={apiStatus !== undefined}
				status={apiStatus?.status as AlertBarStatusType}
				message={apiStatus?.message || ""}
				onCloseComplete={() => {
					setApiStatus(undefined);
				}}
			/>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-start gap-3 [&>label]:w-full [&>label]:flex [&>label]:flex-col [&>label]:gap-2 [&>label]:text-stone-accent"
			>
				<label htmlFor="name">
					Product name:
					<input
						type="text"
						name="name"
						id="name"
						value={formValues.name}
						placeholder="enter product name"
						className="p-2 bg-white outline outline-1 outline-gray-700 text-gray-700 text-sm placeholder:text-gray-500 rounded-sm"
						onChange={handleChange}
						required
					/>
				</label>
				<label htmlFor="price">
					Product price:
					<input
						type="number"
						name="price"
						id="price"
						min={1}
						value={formValues.price}
						placeholder="enter product price"
						className="p-2 bg-white outline outline-1 outline-gray-700 text-gray-700 text-sm placeholder:text-gray-500 rounded-sm"
						onChange={handleChange}
						required
					/>
				</label>
				<label htmlFor="name">
					Product category:
					<select
						name="category"
						id="category"
						value={formValues.category}
						onChange={handleChange}
						onFocus={() => {
							setPlaceholder("");
						}}
						onBlur={() => {
							setPlaceholder("select a category");
						}}
						className="p-2 bg-white outline outline-1 outline-gray-700 text-gray-700 text-sm placeholder:text-gray-500 rounded-sm"
					>
						<option value="" selected disabled>
							{placeholder}
						</option>
						{productCategories.map((category) => (
							<option key={category.id} value={category.categoryName}>
								{category.categoryName}
							</option>
						))}
					</select>
				</label>

				<label htmlFor="productImage">
					Product Image:
					<input
						type="text"
						name="productImage"
						id="productImage"
						value={formValues.productImage}
						placeholder="enter product image url"
						className="p-2 bg-white outline outline-1 outline-gray-700 text-gray-700 text-sm placeholder:text-gray-500 rounded-sm"
						onChange={handleChange}
						required
					/>
				</label>

				<button
					type="submit"
					className={`w-full bg-mustard-orange border border-white border-solid px-7 py-3 text-xs font-normal rounded-sm disabled:bg-gray-700`}
					disabled={isLoading || isUpdating}
				>
					{isLoading || isUpdating ? "Submitting" : "Submit"}
				</button>
			</form>
		</>
	);
};

export default CreateProductForm;
