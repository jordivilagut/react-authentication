import {connect} from "react-redux";
import {signup, updateUser} from "../actions/userActions";
import {Signup} from "../pages/Signup";

const mapStateToProps = state => {
    return {user: state.user};
};

const mapDispatchToProps = dispatch => ({
    handleSubmit: user => {
        dispatch(signup(user))},
    handleInputChange: e =>
        dispatch(updateUser(e.target)),
});

export const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);