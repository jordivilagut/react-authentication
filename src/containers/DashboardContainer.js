import {connect} from "react-redux";
import {Dashboard} from "../pages/Dashboard";

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({});

export const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);