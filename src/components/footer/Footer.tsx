import { Link } from "react-router-dom";
import { socialsLinks } from "src/data";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-[#212121]">
				<div className="flex flex-col sm:flex-row justify-between sm:items-center gap-5 py-3 md:py-8 text-xs md:text-sm text-white max-w-[90dvw] mx-auto ">
					<p>
						© {currentYear} Afri-Raashii. All rights reserved
					</p>

					<ul className="">
						<li className="flex flex-row gap-2">
							{socialsLinks.map((item) => {
								return (
									<div
										key={item.id}
										className="bg-mustard-orange md:w-9 md:h-9  rounded-full flex justify-center items-center cursor-pointer p-1 md:p-2"
									>
										<Link
											key={item.id}
											to={item.link}
											target="_blank"
											className="text-white"
										>
											<img
												alt={item.text}
												src={`/${item.iconPath}`}
												className="w-4"
											/>
										</Link>
									</div>
								);
							})}
						</li>
					</ul>
				</div>
		</footer>
	);
};

export default Footer;
