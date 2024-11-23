import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to={"/"} className="flex items-center gap-2">
			<img
				src={"/static-images/logo.png"}
				className="w-[60px] h-[40px]"
				alt="afri-raashii"
			/>
			<div className="flex flex-col">
				<p className="font-bold text-lg">Afri-Rashii</p>
				<p className="font-light text-sm">African Grocery</p>
			</div>
		</Link>
	);
};

export default Logo;
