import { useState } from "react";
import { APIStatusType, UserType } from "types/index";
import { useLogin } from "@hooks/index";
import AlertBar, { AlertBarStatusType } from "@components/app/Alertbar";

const LoginPage = () => {
	const [formValues, setFormValues] = useState<UserType>({
		name: "",
		email: "",
		password: "",
		role: "USER",
	});
	const [apiStatus, setApiStatus] = useState<APIStatusType | undefined>();

	const { loginUser, isLoading } = useLogin({
		onSuccess: (data) => {
			setApiStatus({
				status: "success",
				message: data,
			});
			
		},
		onError: () => {
			setApiStatus({
				status: "error",
				message: "unable to delete product",
			});
		},
	});

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLInputElement>
	) => {
		const formName = e.target.name as keyof UserType;

		setFormValues((prev) => {
			return { ...prev, [formName]: e.target.value };
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loginUser(formValues);
	};

	return (
		<section className="w-[90dvw] mx-auto pt-10 md:pt-[10px] pb-10 md:py-[50px] flex flex-col items-center justify-center">
			{apiStatus !== undefined && (
				<AlertBar
					isOpen={apiStatus !== undefined}
					status={apiStatus?.status as AlertBarStatusType}
					message={apiStatus?.message || ""}
					onCloseComplete={() => {
						setApiStatus(undefined);
					}}
				/>
			)}
			<h2 className="text-light font-light mb-5 text-2xl text-center">
				Login To Your Shopping Profile
			</h2>

			<form
				onSubmit={handleSubmit}
				className="w-full md:w-[554px] flex flex-col items-start gap-3 border-[1.3px] border-[#D6D6D6] rounded-md p-3 [&>label]:w-full [&>label]:flex [&>label]:flex-col [&>label]:gap-2 [&>label]:text-white"
			>
				<label htmlFor="name">
					Name:
					<input
						type="text"
						name="name"
						id="name"
						value={formValues.name}
						placeholder="enter your name"
						className="p-2 bg-white outline outline-1 outline-gray-700 text-gray-700 text-sm placeholder:text-gray-500 rounded-sm"
						onChange={handleChange}
						required
					/>
				</label>
				<label htmlFor="email">
					Email:
					<input
						type="email"
						name="email"
						id="email"
						min={1}
						value={formValues.email}
						placeholder="enter email address"
						className="p-2 bg-white outline outline-1 outline-gray-700 text-gray-700 text-sm placeholder:text-gray-500 rounded-sm"
						onChange={handleChange}
						required
					/>
				</label>
				<label htmlFor="password">
					Password:
					<input
						type="password"
						name="password"
						id="password"
						value={formValues.password}
						placeholder="enter your password"
						className="p-2 bg-white outline outline-1 outline-gray-700 text-gray-700 text-sm placeholder:text-gray-500 rounded-sm"
						onChange={handleChange}
						required
					/>
				</label>

				<button
					type="submit"
					className={`w-full bg-mustard-orange border-0 px-7 py-3 text-xs font-normal rounded-sm disabled:bg-gray-700`}
					disabled={isLoading}
				>
					{isLoading ? "Submitting" : "Submit"}
				</button>
			</form>

		</section>
	);
};

export default LoginPage;
