import {connect} from "react-redux";
import {Login} from "../pages/Login";

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({});

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);