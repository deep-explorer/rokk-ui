import axios from "axios";
import { UserData } from "../containers/SignupPage/InputContainer";

export const signup = async (userData: UserData) => {

  console.log(userData)
  const res = await axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/dbconnections/signup`, {
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    email: userData.email,
    password: userData.password,
    connection: process.env.REACT_APP_AUTH0_CONNECTION,
    name: userData.name,
    birthdate: userData.year + '-' + userData.month + '-' + userData.date,
    gender: userData.gender,
  }, {
    headers: {
      "Content-Type": 'application/json'
    }
  });
  return res;
}