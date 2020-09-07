import axios from "axios";
import { endpoints } from "./endpoints";
import {authHeader} from "./auth";

/**
 * Functions used to issue AJAX requests and manage responses.
 * All of the included methods use the Axios library for Promise-based requests.
 */
export const assignmentService = {
  getAssignment,
  getFieldsForAssignment,
  performRefreshOnAssignment,
  performActionOnAssignment,
  assignments
};

function getAssignment(id) {
  return axios
    .get(encodeURI(endpoints.BASEURL + endpoints.ASSIGNMENTS + "/" + id), {
      headers: authHeader()
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return Promise.reject("Get Assignment API failed");
    });
}

function getFieldsForAssignment(assignment, actionId) {
  if (!actionId) {
    if (assignment.actions && assignment.actions.length > 0) {
      actionId = assignment.actions[0].ID;
    } else {
      return Promise.reject("No valid actions found.");
    }
  }

  return axios
    .get(
      encodeURI(
        endpoints.BASEURL +
          endpoints.ASSIGNMENTS +
          "/" +
          assignment.ID +
          endpoints.ACTIONS +
          "/" +
          actionId
      ),
      {
        headers: authHeader()
      }
    )
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return Promise.reject("get feilds for assignment failed");
    });
}

function performRefreshOnAssignment(assignmentID, actionID, body) {
  return axios
    .put(
      encodeURI(
        endpoints.BASEURL +
          endpoints.ASSIGNMENTS +
          "/" +
          assignmentID +
          endpoints.ACTIONS +
          "/" +
          actionID +
          endpoints.REFRESH
      ),
      {
        content: body
      },
      {
        headers: {
          ...authHeader()
        }
      }
    )
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return Promise.reject("perform refresh for assignment failed");
    });
}

function performActionOnAssignment(assignmentID, actionID, body) {
  return axios
    .post(
      encodeURI(endpoints.BASEURL + endpoints.ASSIGNMENTS + "/" + assignmentID),
      {
        content: test //ReferenceHelper.getPostContent(body)
      },
      {
        params: {
          actionID: actionID
        },
        headers: authHeader()
      }
    )
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      return Promise.reject(error);
    });
}

function assignments() {
  return axios
    .get(endpoints.BASEURL + endpoints.ASSIGNMENTS, { headers: authHeader() })
    .then(function(response) {
      return response.data.assignments;
    })
    .catch(function(error) {
      return Promise.reject("assignments API failed");
    });
}
