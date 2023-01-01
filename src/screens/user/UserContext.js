import React, { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login, register, getUserById, getUser, checkOut, getAllOrders, getPendingOrders,getShippingOrders, getOneOrder, receiveOrder, cancelOrder, getSuccessOrders, getCancelOrders } from './UserService'
import constants from "../../utils/constants";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const [userID, setUserID] = useState("");
  const onLogin = async (username, password) => {
    try {
      const res = await login(username, password);
      if (res.status == true && res.token) {
        await AsyncStorage.setItem(constants.STORAGE_KEY, res.token);
        setIsLogin(true);
        console.log('res', res)
        setUserID(res._id);
      }
      return { result: res.status, message: res.message };
    } catch (error) {
      console.log('onLogin error: ', error);
    }
    return false;
  }

  const onRegister = async (username, password, confirmPassword, name, email, phone, address) => {
    try {
      const res = await register(username, password, confirmPassword, name, email, phone, address);
      return { result: res.status, message: res.message };
    } catch (error) {
      console.log('onRegister error: ', error);
    }
    return false;
  }

  const onLogout = async () => {
    setIsLogin(false);
  }

  const onGetUser = async () => {
    try {
      const res = await getUser();
      if (res) setUser(res);
    } catch (error) {
      console.log("onGetUser", error);
    }
  }

  const onGetUserById = async (id) => {
    try {
      const result = await getUserById(id);
      setUser(result);
    } catch (error) {
      console.log('that bai', error);
    }
  }
  const onCheckOut = async (id, body) => {
    try {
      const res = await checkOut(id, body);
      return res;
    } catch (error) {
      console.log("onGetCart error: ", error);
    }
    return false;
  }

  const onGetAllOrders = async (id) => {
    try {
      const res = await getAllOrders(id);
      return res;
    } catch (error) {
      console.log("onGetCart error: ", error);
    }
    return false;
  }

  const onGetPendingOrders = async (id) => {
    try {
      const res = await getPendingOrders(id);
      return res;
    } catch (error) {
      console.log("onGetCart error: ", error);
    }
    return false;
  }

  const onGetShippingOrders = async (id) => {
    try {
        const res = await getShippingOrders(id);
        return res;
      } catch (error) {
        console.log("onGetCart error: ", error);
      }
      return false;
  }

  const onGetOneOrder = async (id, ido) => {
    try {
        const res = await getOneOrder(id, ido);
        return res;
      } catch (error) {
        console.log("onGetCart error: ", error);
      }
      return false;
  }
  const onCancelOrder = async (id, ido) => {
    try {
        const res = await cancelOrder(id, ido);
        return res;
      } catch (error) {
        console.log("onGetCart error: ", error);
      }
      return false;
  }
  const onReceiveOrder = async (id, ido) => {
    try {
        const res = await receiveOrder(id, ido);
        return res;
      } catch (error) {
        console.log("onGetCart error: ", error);
      }
      return false;
  }

  const onGetSuccessOrders = async (id) => {
    try {
        const res = await getSuccessOrders(id);
        return res;
      } catch (error) {
        console.log("onGetCart error: ", error);
      }
      return false;
  }

  const onGetCancelOrders = async (id) => {
    try {
        const res = await getCancelOrders(id);
        return res;
      } catch (error) {
        console.log("onGetCart error: ", error);
      }
      return false;
  }

  return (
    <UserContext.Provider
      value={{
        onLogin, onRegister, onLogout, onGetUser, onGetUserById, isLogin, user, 
        userID, onCheckOut, onGetAllOrders, onGetPendingOrders,onGetShippingOrders,
        onGetOneOrder,onCancelOrder,onReceiveOrder,onGetSuccessOrders,onGetCancelOrders
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider