import axios from "axios";

const authServices = {
  verifyToken: async function (token) {
    const response = await axios.get(
      "http://localhost:8080/admin/auth/verify",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  },
};

export default authServices;
