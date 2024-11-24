import SectionBadge from "@components/app/SectionBadge";
import ProductCard from "@components/products/ProductCard";
import { LiaArrowLeftSolid, LiaArrowRightSolid } from "react-icons/lia";

const Featured = () => {
	return (
		<section className="flex items-end gap-10 mb-8 md:mb-24">
			<div className="w-4/12 hidden lg:block">
				<img
					src="/static-images/shrubs-3.jpg"
					className="rounded-md w-full h-full"
					alt="roots and shrubs"
				/>
			</div>

			<div className="w-full lg:w-8/12 flex flex-col gap-2 h-full">
				<SectionBadge text="Featured" textColor="text-mustard-orange" />
				<h3 className="text-3xl md:text-5xl font-bold mb-4">Roots & Shrubs</h3>
				<p className="mb-10">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab illum
					exercitationem dolorem ex labore. Id quam ducimus incidunt distinctio
					fuga amet voluptatem adipisci ex soluta hic corporis, tenetur nemo
					consectetur eligendi, libero accusantium iure aut dignissimos odit
					voluptate laborum maxime?
				</p>

				<span className="md:hidden w-full flex items-center justify-center gap-2 mb-3 text-xs">
					<LiaArrowLeftSolid size={18}/> swipe to view more <LiaArrowRightSolid size={18}/>
				</span>
				<div className="grid grid-cols-[repeat(3,1fr)] gap-7 justify-between w-full overflow-x-scroll [&>div]:w-[280px] sm:[&>div]:w-[300px]">
					<ProductCard
						productImage="/static-images/shrubs-2.jpg"
						name="Protein"
						price={200}
						category="Grain"
					/>
					<ProductCard
						productImage="/static-images/shrubs-2.jpg"
						name="Protein"
						price={200}
						category="Grain"
					/>
					<ProductCard
						productImage="/static-images/shrubs-2.jpg"
						name="Protein"
						price={200}
						category="Grain"
					/>
					
				</div>
			</div>
		</section>
	);
};

export default Featured;
