import axios from "axios";
import { endpoints } from "./endpoints";
import {authHeader} from "./auth";

export const caseService = {
    getCaseTypes,
    getCaseCreationPage,
    createCase,
    getCase,
    updateCase,
    refreshCase,
    getPage,
    getView,
    cases
};

function getCaseTypes() {
    return axios
      .get(endpoints.BASEURL + endpoints.CASETYPES, { headers: authHeader() })
      .then(function(response) {
           return response.data.caseTypes;
       })
      .catch(function(error) {
           return Promise.reject("CaseTypes API failed");
      });
}

function getCaseCreationPage(id) {
    return axios
      .get(endpoints.BASEURL + endpoints.CASETYPES + "/" + id, {
          headers: authHeader()
       })
      .then(function(response) {
          return response.data;
       })
      .catch(function(error) {
          return Promise.reject("Case creation failed");
      });
}

function createCase(id, content) {
    return axios
      .post(endpoints.BASEURL + endpoints.CASES,
      {
        caseTypeID: id,
        processID: "pyStartCase",
        content: content
       },{
        headers: {
        ...authHeader()
        }
       })
      .then(function(response) {
        return response.data;
       })
      .catch(function(error) {
        return Promise.reject("Create Case API failed");
       });
}

function getCase(id) {
    return axios
      .get(encodeURI(endpoints.BASEURL + endpoints.CASES + "/" + id), {
         headers: {
           ...authHeader(),
           "Access-Control-Expose-Headers": "etag"
         }
       })
      .then(function(response) {
        response.data["etag"] = response.headers.etag;
        return response.data;
      })
      .catch(function(error) {
        return Promise.reject("get case API failed");
      });
}

function updateCase(id, body, etag, action) {
    let actionParam = action ? { actionID: action } : null;
    
    return axios
      .put(
       encodeURI(endpoints.BASEURL + endpoints.CASES + "/" + id),
        {
          content: ReferenceHelper.getPostContent(body)
        },
        {
          params: actionParam,
          headers: {
             ...authHeader(),
             "If-Match": etag
          }
        }
       )
      .then(function(response) {
         return response.data;
       })
      .catch(function(error) {
         return Promise.reject("update case failed");
       });
      }

function refreshCase(myCase, body) {
    return axios
      .put(
       encodeURI(
       endpoints.BASEURL + "/" + endpoints.CASES + myCase.ID + endpoints.REFRESH
       ),
       {
         content: body 
       },
       {
         headers: {
           ...authHeader(),
           "Access-Control-Expose-Headers": myCase.etag
         }
       }
       )
      .then(function(response) {
         return response.data;
      })
      .catch(function(error) {
        return Promise.reject("refresh case API failed");
      });
}

function getPage(caseID, pageID) {
    return axios
      .get(
        encodeURI(endpoints.BASEURL + endpoints.CASES + "/" + caseID + endpoints.PAGES + "/" + endpoints.PAGES + "/" + pageID),
        {
           headers: {
            ...authHeader()
          }
        }
       )
      .then(function(response) {
         return response.data;
       })
      .catch( function(error){
         return Promise.reject("get page API failed");
      });
}

function getView(caseID, viewID) {
    return axios
       .get(
         encodeURI(
           endpoints.BASEURL + endpoints.CASES + "/" + caseID + endpoints.VIEWS + "/" + viewID
         ),
         {
           headers: {
             ...authHeader()
           }
         }
        )
       .then(function(error) {
         return response.data;
        })
       .catch(function(error){
         return Promise.reject("get View API failed");
        });
}

function cases() {
    return axios
       .get(endpoints.BASEURL + endpoints.CASES, { headers: authHeader() })
       .then(function(response) {
          return response.data.cases;
        })
       .catch(function(error) {
          return Promise.reject("Cases API failed");
        });
      }
      