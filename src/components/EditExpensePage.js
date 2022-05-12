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
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
            </div>
        </div>  
        <div className="content-container">
        <ExpenseForm 
        expense = {expense}
        onSubmit={(expense) => {
            props.dispatch(startEditExpense(id ,expense)).then(() => {
                navigate('/')
            })
            
        }}
        />
        <button className="button button--remove"
        onClick={() =>{
            props.dispatch(startRemoveExpense({id: id}))
            navigate('/dashboard')
        }}
        >Remove Expense</button>
        </div>
        </div>
        
    );
}



export default connect()(EditExpensePage);
