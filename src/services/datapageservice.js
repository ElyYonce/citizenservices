import axios from "axios";
import { endpoints } from "./endpoints";
import {authHeader} from "./auth";

//Promised based data page requests
export const dataPageService = {
    getDataPage
};

function getDataPage(id, params) {
    return axios.get(endpoints.BASEURL + endpoints.DATA + "/" + id,{
                      headers: authHeader(),
                      params: params
                    })
                    .then(function(response) {
                      return response.data;
                    })
                    .catch(function(error) {
                      return Promise.reject("Data page API failed");
                    });
}