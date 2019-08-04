import {connect} from "react-redux";
import {Dashboard} from "../pages/Dashboard";
import {logout} from "../actions/userActions";

const mapStateToProps = state => {
    return {user: state.user};
};

const mapDispatchToProps = dispatch => ({
    handleLogout: () => {
        dispatch(logout())}
});

export const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);