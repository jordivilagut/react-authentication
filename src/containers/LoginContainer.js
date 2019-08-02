import {connect} from "react-redux";
import {updateForm} from "../actions/formActions";
import {login} from "../actions/userActions";
import {Login} from "../pages/Login";

const mapStateToProps = state => {
    return {user: state.user};
};

const mapDispatchToProps = dispatch => ({
    handleSubmit: user => {
        dispatch(login(user))},
    handleInputChange: e =>
        dispatch(updateForm(e.target)),
});

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);