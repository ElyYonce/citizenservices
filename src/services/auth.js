export function authHeader() {
    let user = localStorage.getItem('user');
    //let user = btoa('Ely' + ":" + 'rules');
    
    if(user) {
        console.log("Auth Obj Exists");
        return {
            'Authorization':'Basic ' + user,
        };
    } else {
        console.log("Auth Obj does not exist");
        return {};
    }
}