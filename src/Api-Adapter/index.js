const BASE_URL = "https://nile-marketplace.onrender.com/api";

// user endpoints

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
    console.log(error);
  }
};
export const registerUser = async (
  firstName,
  lastName,
  username,
  password,
  addressLineOne,
  addressLineTwo,
  city,
  state,
  country,
  postalCode,
  email
) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        addressLineOne: addressLineOne,
        addressLineTwo: addressLineTwo,
        city: city,
        state: state,
        country: country,
        postalCode: postalCode,
        email: email,
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
    return result;
  } catch (err) {
    console.error(err);
  }
};
// products endpoints
export const getProducts = async (pageNumber, searchTerm) => {
  try {
    if(!pageNumber){
      pageNumber = 1
    }
    let urlSearch = "";
    if (searchTerm) {
      urlSearch = `/${searchTerm}`;
    }
    const response = await fetch(
      `${BASE_URL}/products/${pageNumber}${urlSearch}`,
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
//getProducts()
//getProducts(1,'searchterm')
export const getProductsByCategory = async (categoryId, pageNumber, searchTerm) => {
  try {
    if(!pageNumber){
      pageNumber = 1
    }
    let urlSearch = "";
    if (searchTerm) {
      urlSearch = `/${searchTerm}`;
    }
    const response = await fetch(
      `${BASE_URL}/products/category/${categoryId}/${pageNumber}${urlSearch}`,
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

export const getUserPaymentById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users_payments/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const createUserPayment = async (paymentType, provider, accountNo, expire) => {
  try {
    const response = await fetch(`${BASE_URL}/users_payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        paymentType: paymentType,
        provider: provider,
        accountNo: accountNo,
        expire: expire,
      }),
    });

    const result = await response.json();

    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const updateUserPayment = async (paymentType, provider, accountNo) => {
  try {
    const response = await fetch(`${BASE_URL}/users_payments`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        paymentType: paymentType,
        provider: provider,
        accountNo: accountNo,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deleteUserPayment = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users_payments/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// cart endpoints
export const getCart = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cart`, {
      method: "GET",
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const addToCart = async () => {
  try {
    const response = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId: productId,
        cartId: cart.id,
        quantity: quantity,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const deleteCartItem = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/carts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
export const updateCart = async (quantity, cartItemId) => {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        cartItemId: cartItemId,
        quantity: quantity,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// discounts endpoints

// order endpoints
export const getUserOrderById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/user_order/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const updateUserOrder = async (userId, orderId, total) => {
  try {
    const response = await fetch(`${BASE_URL}/user_order`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "PATCH",
      body: JSON.stringify({
        orderId: orderId,
        userId: userId,
        total: total,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const createOrder = async (orderItemData, orderPaymentData, total) => {
  try {
    const response = await fetch(`${BASE_URL}/users_order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        orderItemData: orderItemData,
        orderPaymentData: orderPaymentData,
        total: total
      }),
    });

    const result = await response.json();

    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deleteOrder = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users_order/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};