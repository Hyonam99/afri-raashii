import Banner from "@components/home/Banner";
import Featured from "@components/home/Featured";
import MiniProducts from "@components/home/MiniProducts";

const App = () => {
	return (
		<div>
			<Banner />
			<div className="max-w-[90dvw] mx-auto mt-[100dvh]">
				<Featured />
				<MiniProducts />
			</div>
		</div>
	);
}

export default App;
