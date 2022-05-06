import React from "react";
import { Outlet, NavLink } from "react-router-dom";
const Header = () =>(
    <header>
        <h1>Expensify</h1>
        <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "is-active" : ''}>Dashboard</NavLink>
        <NavLink to='/create' className={({ isActive }) => isActive ? "is-active" : ''}>Create Expense</NavLink>
        <NavLink to='/help' className={({ isActive }) => isActive ? "is-active" : ''}>Help</NavLink>
        </nav>
        <Outlet />
    </header>
);
export default Header;