import {connect} from "react-redux";
import {login, logout} from "../actions/userActions";
import {updateForm} from "../actions/formActions";
import {App} from "../application/App";

const mapStateToProps = state => {
    return {
        authentication: state.authentication,
        userForm: state.userForm
    };
};

const mapDispatchToProps = dispatch => ({
    handleSubmit: userForm => {
        dispatch(login(userForm))},
    handleInputChange: e =>
        dispatch(updateForm(e.target)),
    handleLogout: () => {
        dispatch(logout())}
});

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);