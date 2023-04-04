const BASE_URL = "https://nile-marketplace.onrender.com/api";

// user endpoints

export const loginUser = async (username, password) => {
  try {
    console.log(`${BASE_URL}/users/login`);
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const fetchMe = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
// products endpoints
export const getProducts = async (pageNumber, searchTerm) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${pageNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchTerm: searchTerm,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
export const getProductsByCategory = async (
  categoryId,
  pageNumber,
  searchTerm
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products/category/${categoryId}/${pageNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchTerm: searchTerm,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
export const getProduct = async (productId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products/product/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchTerm: searchTerm,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }

};
export const getProductByUserName = async (username, pageNumber) =>{
  try {
    const response = await fetch(
      `${BASE_URL}/products/${username}/${pageNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchTerm: searchTerm,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
// userPayments endpoints

// cart endpoints

// discounts endpoints

// order endpoints
