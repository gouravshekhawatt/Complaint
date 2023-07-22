import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_LOGIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../constants/userConstants";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST }); // Update the action type to LOGIN_REQUEST or define USER_LOGIN_REQUEST

    const config = {
      headers: { 'Content-Type': "application/json" },
    };

    const { data } = await axios.post("http://localhost:5000/api/users/login", {
      email,
      password,
    }, config);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    // Save data in local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};



export const logout = () => async(dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({type: USER_LOGOUT});
};





export const register = ( name,email, password,gender, division,location,number) => async (dispatch) => {
  try {

    dispatch({type: USER_REGISTER_REQUEST});
    // Calling API
    const config = {
      headers: { 'Content-Type': "application/json" },
    };


    const { data } = await axios.post("http://localhost:5000/api/users/register", {
      name,email, password,gender, division,location,number
    }, config);

   dispatch({type: USER_REGISTER_SUCCESS, payload:data});
 
    // Saving data in local storage
    localStorage.setItem("userInfo", JSON.stringify(data));
   

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
}