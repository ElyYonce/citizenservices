export const endpoints = {
    //define all of the endpoints for the application in this file
    //inorder for the application to work for a Pega personal edition you must turn off SSL/TLS on the Pega API service package
    //to do this search service packages and find the one with the name api and uncheck the SSL/TLS checkbox
    BASEURL: "http://192.168.1.79:8080/prweb/api/v1",
    AUTH: "/authenticate",
    CASES: "/cases",
    CASETYPES: "/casetypes",
    VIEWS: "/views",
    ASSIGNMENTS: "/assignments",
    ACTIONS: "/actions",
    PAGES: "/pages",
    DATA: "/data",
    REFRESH: "/refresh"
};