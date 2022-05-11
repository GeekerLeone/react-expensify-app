import React from "react";
import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {startRemoveExpense, startEditExpense} from '../actions/expenses';
import { useNavigate } from 'react-router-dom';



const EditExpensePage = (props) =>{
    const {id} = useParams()
    const navigate = useNavigate();
    const expense = useSelector((state) => state.expenses.find(expense => expense.id === id));
    return(
    <div>
        <ExpenseForm 
        expense = {expense}
        onSubmit={(expense) => {
            props.dispatch(startEditExpense(id ,expense)).then(() => {
                navigate('/')
            })
            
        }}
        />
        <button 
        onClick={() =>{
            props.dispatch(startRemoveExpense({id: id}))
            navigate('/dashboard')
        }}
        >Remove</button>
    </div>
    );
}



export default connect()(EditExpensePage);
