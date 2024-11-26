import SectionBadge from "@components/app/SectionBadge";
import ProductCard from "@components/products/ProductCard";
import { LiaArrowLeftSolid, LiaArrowRightSolid } from "react-icons/lia";

const Featured = () => {
	return (
		<section className="flex items-end gap-10 mb-8 md:mb-24">
			<div className="w-5/12 hidden lg:block">
				<img
					src="/static-images/featured-shrub.jpg"
					className="rounded-md w-full h-full"
					alt="roots and shrubs"
				/>
			</div>

			<div className="w-full lg:w-7/12 flex flex-col gap-2 h-full">
				<SectionBadge text="Featured" textColor="text-mustard-orange" />
				<h3 className="text-3xl md:text-4xl font-bold mb-4">Roots & Shrubs</h3>
				<p className="mb-10">
					Discover the freshest and finest roots, handpicked for
					your convenience. Shop our featured products and enjoy unbeatable
					quality.
				</p>

				<span className="md:hidden w-full flex items-center justify-center gap-2 mb-3 text-xs">
					<LiaArrowLeftSolid size={18} /> swipe to view more{" "}
					<LiaArrowRightSolid size={18} />
				</span>
				<div className="grid grid-cols-[repeat(3,1fr)] gap-7 justify-between w-full overflow-x-scroll [&>div]:w-[280px] sm:[&>div]:w-[300px] horizontal-scroll pb-2">
					<ProductCard
						productImage="/static-images/shrubs-1.jpg"
						name="Horseradish Root"
						price={8}
						category="Roots & Shrubs"
					/>
					<ProductCard
						productImage="/static-images/shrubs-2.jpg"
						name="Turmeric Root & Beets"
						price={32}
						category="Roots & Shrubs"
					/>
					<ProductCard
						productImage="/static-images/shrubs-3.jpg"
						name="Yucca & Radishes"
						price={54}
						category="Roots & Shrubs"
					/>
				</div>
			</div>
		</section>
	);
};

export default Featured;
