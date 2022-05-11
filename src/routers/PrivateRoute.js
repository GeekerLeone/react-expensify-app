import Header from "../components/Header";
import React from "react";
import { connect } from "react-redux";
import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    children
}) => {
    return isAuthenticated? (
        <div>
        <Header/>
        {children}
        </div>
    ):(
        <Navigate replace to="/" />
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)