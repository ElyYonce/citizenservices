import axios from "axios";
import { endpoints } from "./endpoints";
import { creds } from "./creds";
import {authHeader} from "./auth";

export const userService = {
    login,
    logout,
    operator
};

function login() {
    const username = creds.USERNAME;
    const password = creds.PASSWORD;
    const encodeUser = btoa(username + ":" + password);
    
    return axios
        .get(endpoints.BASEURL + endpoints.AUTH, {
              headers: { Authorization: "Basic " + encodeUser}
            })
            .then(function(response) {
              console.log("Login Success");
              localStorage.setItem("user", encodeUser);
              return encodeUser;
            })
            .catch(function(error) {
              console.log("Login Fail");
              return Promise.reject("Login Fail");
            });
}

function logout() {
    localStorage.removeItem("user");
}

function operator() {
    return axios
        .get(endpoints.BASEURL + endpoints.DATA + "/D_OperatorID",{
           headers: authHeader()
        })
        .then(function(response) {
           return response.data;
        })
        .catch(function() {
           return Promise.reject("failed to get operator info")
        });
}