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
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
// products endpoints

// userPayments endpoints
// get payment()
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
// post()
export const createUserPayment = async (
  paymentType,
  provider,
  accountNo,
  expire
) => {
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
// patch()
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
// delete()
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

// discounts endpoints

// order endpoints
