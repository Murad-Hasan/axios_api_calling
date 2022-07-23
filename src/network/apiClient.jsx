import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://simple-demo-api.herokuapp.com/",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    },
});



// unauthorized request
// axiosClient.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         let res = error.response;
//         if (res.status == 401) {
//         window.location.href = "/login";
//         }
//     console.error("Looks like there was a problem. Status Code: " + res.status);
//     return Promise.reject(error);
//     }
// );


export default axiosClient;