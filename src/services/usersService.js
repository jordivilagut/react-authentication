import agent from "../api/agent";

export const usersService = {
    login,
    logout
};

function login(username, password) {

    const user = JSON.stringify({ username, password });

    return agent.User.login(user).then(
        response => {
            console.log("user service logging in", response.body);
            localStorage.setItem('user', JSON.stringify(response.body));
            return response.body;
        },
        error => {
            console.log("user service error", error, error.status);
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
        console.log("Token deleted");
    } else {
        console.error('An error occurred.', e);
    }
}