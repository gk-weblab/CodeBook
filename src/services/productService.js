function getUrl(data, type) {
	switch (type) {
		case "search":
			return `444/products?name_like=${data}`;
			
		case "featured":
			return "444/featured_products";
		case "single":
			return `444/products/${data}`;
		default:
			return `444/products?name_like=`;
			
	}
}

export async function getProducts(data='', type ="search") {
	const baseURL = "http://localhost:4000/";
	let url = getUrl(data, type);
	try {
		const response = await fetch(`${baseURL}${url}`);
		if (!response.ok) {
			const error = { message: response.statusText, code: response.status };
			throw error;
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
}
