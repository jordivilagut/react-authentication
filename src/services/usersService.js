import agent from "../api/agent";

export const usersService = {
    login,
    signup,
    logout
};

const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";

function login(username, password) {
    return userAccess(username, password, LOGIN)
}

function signup(username, password) {
    return userAccess(username, password, SIGNUP)
}

function userAccess(username, password, accessType) {
    const user = JSON.stringify({ username, password });
    const request = accessType === LOGIN ?
        agent.User.login(user) :
        agent.User.signup(user);

    return request.then(
        response => {
            localStorage.setItem('user', JSON.stringify(response.body));
            return response.body;
        },
        error => {
            handleError(error);
            return Promise.reject(error);
        }
    );
}

function logout() {
    localStorage.removeItem('user');
}

export function handleError(e) {
    if (e.status === 400 || e.status === 403 || e.status === 401 || e.status === 409) {
        logout();
    } else {
        console.error('An error occurred.', e);
    }
}