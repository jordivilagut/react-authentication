import agent from "../api/agent";

export const usersService = {
    login,
    logout
};

function login(username, password) {

    const user = JSON.stringify({ username, password });

    return agent.User.login(user).then(
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