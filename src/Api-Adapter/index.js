// const BASE_URL = "https://nileserver.onrender.com/api";

const BASE_URL ="http://localhost:8080/api"


export const loginUser = async (username, password) => {
  try {
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
    throw error
  }
};
export const registerUser = async (fields) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...fields,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error
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
    return result;
  } catch (err) {
    console.error(err);
  }
};
// products endpoints
export const getProducts = async ({ category, page, searchTerm }) => {
  try {
    if (!page) {
      page = 1;
    }
    let urlSearch = "";
    if (searchTerm) {
      urlSearch = `/${searchTerm}`;
    }
    let categorySearch = "";
    if (category) {
      categorySearch = `/category/${category}`;
    }
    const response = await fetch(
      `${BASE_URL}/products${categorySearch}/${page}${urlSearch}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/products/product/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
export const getProductsByUserName = async (username, pageNumber) => {
  try {
    const response = await fetch(
      `${BASE_URL}/products/user/${username}/${pageNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
export const deleteProduct = async (productId, token) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
//fields is an object that can include(name,categoryId, description, price ,quantity, and imagURL)
export const editProduct = async (productId, token, fields) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...fields,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
//fields is an object that must include(name,categoryId, description, price ,quantity, and imagURL)
export const postProduct = async (token, fields) => {
  try {
    console.log(fields)
    const response = await fetch(`${BASE_URL}/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...fields,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
// userPayments endpoints

export const getUserPaymentById = async (id, token) => {
  try {
    const response = await fetch(`${BASE_URL}/users_payments/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const createUserPayment = async (
  paymentType,
  provider,
  accountNo,
  expire,
  token
) => {
  try {
    const response = await fetch(`${BASE_URL}/users_payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        paymentType: paymentType,
        provider: provider,
        accountNo: accountNo,
        expire: expire,
      }),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const updateUserPayment = async (fields, token) => {
  try {
    const response = await fetch(`${BASE_URL}/users_payments`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        ...fields,
      }),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deleteUserPayment = async (id, token) => {
  try {
    const response = await fetch(`${BASE_URL}/users_payments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

// cart endpoints
export const getCart = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const addToCart = async (token, productId, quantity) => {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId,
        quantity,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const deleteCartItem = async (id, token) => {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        cartItemId: id,
      }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
export const updateCartItem = async (quantity, cartItemId, token) => {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        cartItemId: cartItemId,
        quantity: quantity,
      }),
    });

    const result = await response.json();
    
    return result;
  } catch (err) {
    console.error(err);
  }
};

// discounts endpoints

// order endpoints
export const getUserOrderById = async (id, token) => {
  try {
    const response = await fetch(`${BASE_URL}/user_order/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}}`,
      },
    });
    const result = await response.json();
    
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const updateUserOrder = async (fields, token) => {
  try {
    const response = await fetch(`${BASE_URL}/user_order`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        ...fields,
      }),
    });

    const result = await response.json();
    
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const createOrder = async (
  orderItemData,
  orderPaymentData,
  total,
  token
) => {
  try {
    const response = await fetch(`${BASE_URL}/users_order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        orderItemData: orderItemData,
        orderPaymentData: orderPaymentData,
        total: total,
      }),
    });

    const result = await response.json();

    
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deleteOrder = async (id, token) => {
  try {
    const response = await fetch(`${BASE_URL}/users_order/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    
    return result;
  } catch (err) {
    console.error(err);
  }
};
//secretcode87654321
export const becomeAdmin = async (token, secretCode) => {
  try {
    const response = await fetch(`${BASE_URL}/admin/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        secretCode,
      }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
export const becomeStore = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/store`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    throw error
  }
};

export const checkOut = async (amount, id) => {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount,
        id,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
