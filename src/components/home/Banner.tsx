import { useEffect, useRef, useState } from "react";

const Banner = () => {
	const videos = [
		"/static-videos/pepper.mp4",
		"/static-videos/pear.mp4",
		"/static-videos/lemons.mp4",
		"/static-videos/fruits.mp4",
		"/static-videos/grocery-payment.mp4",
	];
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const videoRef = useRef<any>(null);

	useEffect(() => {
		const videoElement = videoRef.current;

		const handleVideoEnd = () => {
			setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
		};

		videoElement.addEventListener("ended", handleVideoEnd);

		return () => {
			videoElement.removeEventListener("ended", handleVideoEnd);
		};
	}, [videos]);

	useEffect(() => {
		const videoElement = videoRef.current;
		videoElement.classList.add("opacity-0");
		setTimeout(() => {
			videoElement.src = videos[currentVideoIndex];
			videoElement.load();
			videoElement.play();
			videoElement.classList.remove("opacity-0");
		}, 200)
	}, [currentVideoIndex, videos]);

	return (
		<div className="absolute top-0 flex items-center h-[100dvh] w-full justify-center bg-black">
			<video
				ref={videoRef}
				className="w-full h-full transition-opacity duration-500 ease-in-out object-cover object-bottom brightness-50"
				muted
				autoPlay
			></video>

			<div className="absolute text-center">
				<h1 className="relative text-5xl mb-4 text-white font-bold">
					Your African Grocery Haven!
				</h1>
				<p className="text-2xl font-semibold mb-2">
					Shop <span className="text-mustard-orange-light">Fresh.</span> Cook{" "}
					<span className="text-mustard-orange-light">Authentic.</span> Live{" "}
					<span className="text-mustard-orange-light">Flavorfully.</span>
				</p>
				<p>Let us bring Africa closer to you—one ingredient at a time.</p>
			</div>
		</div>
	);
};

export default Banner;
