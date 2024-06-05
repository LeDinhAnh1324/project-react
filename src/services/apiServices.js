import axios from "axios";

const postCreateNewUser = (email, password, username, role, image) => {
  //submitDATA
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("Userimage", image);
  return axios.post("http://localhost:8081/api/v1/participant", data);
};
const getAllUsers = () => {
  return axios.get("http://localhost:8081/api/v1/participant/all");
};
export { postCreateNewUser, getAllUsers };
