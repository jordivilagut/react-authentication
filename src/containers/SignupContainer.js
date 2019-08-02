import {connect} from "react-redux";
import {updateForm} from "../actions/formActions";
import {signup} from "../actions/userActions";
import {Signup} from "../pages/Signup";

const mapStateToProps = state => {
    return {user: state.user};
};

const mapDispatchToProps = dispatch => ({
    handleSubmit: user => {
        dispatch(signup(user))},
    handleInputChange: e =>
        dispatch(updateForm(e.target)),
});

export const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);