import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async (dispacth) => {
  const res = await axios.get("http://react-ssr-api.herokuapp.com/users");

  dispacth({
    type: FETCH_USERS,
    payload: res,
  });
};
