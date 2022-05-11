import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({startLogout}) =>(
    <header>
        <h1>Expensify</h1>
        <nav>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "is-active" : ''}>Dashboard</NavLink>
        <NavLink to='/create' className={({ isActive }) => isActive ? "is-active" : ''}>Create Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
        </nav>
        <Outlet />
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);