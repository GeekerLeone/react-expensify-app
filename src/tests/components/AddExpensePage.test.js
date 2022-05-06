import React from "react";
import { shallow } from "enzyme";
import expenses from '../fixtures/expenses'
import { AddExpensePage } from "../../components/AddExpensePage";

let addExpense, navigate, wrapper;
beforeEach(()=>{
    addExpense = jest.fn();
    navigate = jest.fn();
    wrapper = shallow(<AddExpensePage addExpense={addExpense} navigate={navigate}/>)
})

test("should render AddExpensePage correctly", ()=>{
    expect(wrapper).toMatchSnapshot();
})

test("should handle onSubmit", ()=>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(navigate).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
})