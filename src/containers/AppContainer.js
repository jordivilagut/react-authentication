import {connect} from "react-redux";
import {login, logout, signup} from "../actions/userActions";
import {updateForm} from "../actions/formActions";
import {App} from "../application/App";

const mapStateToProps = state => {
    return {
        authentication: state.authentication,
        userForm: state.userForm
    };
};

const mapDispatchToProps = dispatch => ({
    handleLogin: userForm => {
        dispatch(login(userForm))},
    handleSignup: userForm => {
        dispatch(signup(userForm))},
    handleInputChange: e =>
        dispatch(updateForm(e.target)),
    handleLogout: () => {
        dispatch(logout())}
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);