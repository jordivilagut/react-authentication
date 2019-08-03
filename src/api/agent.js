import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT_TEST = 'http://localhost:8080';
//const API_ROOT_PROD = '';

const requests = {
    del: url =>
        superagent.del(API_ROOT_TEST + url),
    get: url =>
        superagent.get(API_ROOT_TEST + url),
    put: (url, body) =>
        superagent.put(API_ROOT_TEST + url, body).set('Content-Type', 'application/json'),
    post: (url, body) =>
        superagent.post(API_ROOT_TEST + url, body).set('Content-Type', 'application/json')
};

const User = {
    login: (user) =>
        requests.post('/auth/login', user),
    signup: (user) =>
        requests.post('/auth/signup', user),
    logout: () =>
        requests.post('/auth/logout', {}).set("Authorization", "Bearer " + localStorage.getItem("auth-token"))
};

export default {User};