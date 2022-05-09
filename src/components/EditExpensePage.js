import React from "react";
import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {editExpense,  startRemoveExpense, startEditExpense} from '../actions/expenses';
import { useNavigate } from 'react-router-dom';



const EditExpensePage = (props) =>{
    const params = useParams()
    const navigate = useNavigate();
    const expense = useSelector((state) => state.expenses.find(expense => expense.id ===params.id));
    return(
    <div>
        <ExpenseForm 
        expense = {expense}
        onSubmit={(expense) => {
            props.dispatch(startEditExpense(params.id ,expense))
            navigate('/')
        }}
        />
        <button 
        onClick={() =>{
            props.dispatch(startRemoveExpense({id: params.id}))
            navigate('/')
        }}
        >Remove</button>
    </div>
    );
}



export default connect()(EditExpensePage);
