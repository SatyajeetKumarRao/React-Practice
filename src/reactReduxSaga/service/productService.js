async function getProductService() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return error.message;
  }
}

export { getProductService };
