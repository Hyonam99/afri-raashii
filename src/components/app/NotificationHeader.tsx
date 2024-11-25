import { Link } from "react-router-dom";

const NotificationHeader = () => {
	return (
		<header className="flex items-center justify-center p-2 bg-grey-accent text-white font-light text-base text-center bg-stone-accent">
			<p>
				Enjoy up to 3 free deliveries when you{" "}
				<Link to={"/login"} className="underline">
					{" "}
					login!
				</Link>
			</p>
		</header>
	);
};

export default NotificationHeader;
