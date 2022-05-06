import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseListItem";
import selectedExpense from '../selectors/expenses'
import ExpenseListFilter from "./ExpenseListFilter";

export const ExpenseList = (props) => (
    <div>
        <ExpenseListFilter />
        {props.expenses.length == 0? (
            <p>No expense</p>
        ):(
            props.expenses.map((expense) => (
            <ExpenseItem key = {expense.id} {...expense}/>
        ))
        )}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpense(state.expenses, state.filter) 
    };
}

export default connect(mapStateToProps)(ExpenseList);
