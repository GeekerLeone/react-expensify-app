import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () =>{
    const action = removeExpense({id: '123asd'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123asd'
    })
}) 

test('should setup edit expense action object', () =>{
    const action = editExpense('123asd', {amount:'123', description: 'Rent'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123asd',
        update: {amount:'123', description:"Rent" }
    })
}) 

test('should setup add expense action object with provided values', () =>{
    const expenseData = {
        description: 'Rent',
        amount: 100,
        note: 'last month',
        createdAt: 1050
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{...expenseData,
        id: expect.any(String)
}})
}) 

test('should setup add expense action object with default values', () =>{
    const expenseData = {};
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
        
    })
}) 