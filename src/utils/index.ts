export const currencyNumberFormat = (num: number): string => {
	const formatter = new Intl.NumberFormat("en-US", {
		maximumFractionDigits: 1,
	});

	if (num >= 1_000_000_000_000) {
		return `${formatter.format(num / 1_000_000_000)}trn`;
	} else if (num >= 1_000_000_000) {
		return `${formatter.format(num / 1_000_000_000)}bn`;
	} else if (num >= 1_000_000) {
		return `${formatter.format(num / 1_000_000)}m`;
	} else {
		return formatter.format(num);
	}
};
