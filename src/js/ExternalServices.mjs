const baseURL = import.meta.env.VITE_SERVER_URL;

async function convertToJson(res) {
  // 1. Convert the response body to JSON first
  const jsonResponse = await res.json();

  // 2. If response is successful, return the data
  if (res.ok) {
    return jsonResponse;
  } else {
    // 3. Throw custom error object containing the server details
    throw { name: "servicesError", message: jsonResponse };
  }
}

export default class ExternalServices {
  constructor(category) {
    // constructor can remain empty or take options if needed
  }

  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(`${baseURL}checkout`, options);
    return await convertToJson(response);
  }
}