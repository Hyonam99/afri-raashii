import { BeatLoader } from "react-spinners";

const Loader = ({text = ""} : {text?: string}) => {
	return (
		<div className="w-full flex flex-row justify-center items-center gap-2 mx-auto h-24 md:h-36">
			<BeatLoader color="#605D5D" size={25} speedMultiplier={1} />{" "}
			<span className="text-base">{text}</span>
		</div>
	);
};

export default Loader;
