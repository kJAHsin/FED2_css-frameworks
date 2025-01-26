declare const tailwindConfig: {
	theme: {
		screens: Record<string, string>;
		extend?: Record<string, unknown>;
		[key: string]: unknown;
	};
	content: string[];
	plugins: unknown[];
};

export default tailwindConfig;
