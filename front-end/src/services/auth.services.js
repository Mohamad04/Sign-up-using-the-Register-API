import axios from "axios";
// import Auth from "../auth";

const authServices = {
  verifyToken:  async function (token) {

      try {
          const response = await axios("http://localhost:8080/admin/auth/verify", {
            method: "get",
            withCredentials: true,
            headers: {
              Authorization: "Bearer " + token,
            },
          })
            // .then(
            // response => {
            //   console.log(response.data);
              return response.data;
            // })
            } catch (error)  {
              console.log(error.response.data);
              return error.response;
            }
            
  }
};

// async function refresh() {
//   const response = await axios("http://localhost:8080/admin/refresh", {
//     method: "get",
//     withCredentials: true,
//   });
//   // console.log(response.data);
//   if (response.data.authenticated) {
//     // console.log("Access 2 = ", response.data.accessToken);
//     Auth.storeAuthData(response.data.user, response.data.accessToken);
//   }
//     return response.data;
// }


export default authServices;
