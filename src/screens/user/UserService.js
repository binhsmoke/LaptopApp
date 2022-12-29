import axiosInstance from "../../utils/axios";
import constants from "../../utils/constants";

export const login = async (username, password) => {
    const data = {
        username: username,
        password: password,
    }
    const res = await axiosInstance.post(constants.API_LOGIN, data);
    return res;
}

export const register = async (username, password, confirmPassword, name, email, phone, address) => {
    const data = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
        name: name,
        phone: phone,
        address: address
    }
    const res = await axiosInstance.post(constants.API_REGISTER, data);
    return res;
}

export const getUser = async (name, email) => {
    const data = {

        name: name,
        email: email,

    }
    const res = await axiosInstance.get(constants.API_LOGIN, data);
    return res;
}
export const getUserById = async (id) => {
    const response = await axiosInstance.get(`${constants.API_USER}/${id}/detail`);
    return response;
}


export const checkOut = async (id, data) => {
    const response = await axiosInstance.post(`${constants.API_USER}/${id}/cart/checkout`, data);
    return response;
}

export const getAllOrders = async (id) => {
    const response = await axiosInstance.get(`${constants.API_USER}/${id}/orders`);
    return response;
}
export const getPendingOrders = async (id) => {
    const response = await axiosInstance.get(`${constants.API_USER}/${id}/orders/pending/get`);
    return response;
}