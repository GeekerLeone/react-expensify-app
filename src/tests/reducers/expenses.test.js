import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'


test('should set default state', ()=>{
    const state = [];
    const result = expensesReducer(undefined, {type: '@@INIT'});
    expect(result).toEqual(state)
})

test('should set remove expense by id', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([expenses[1], expenses[2]])
})

test('should set remove expense by unfound id', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses)
})

test('should set add expense', () =>{
    const action = {
        type: 'ADD_EXPENSE',
        expense:{
            id: '3'
        }
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([...expenses, action.expense])
})

test('should set edit expense', () =>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '0',
        updates: {amount: 0}
    }
    const result = expensesReducer(expenses, action);
    expect(result[0].amount).toEqual(action.updates.amount)
})

test('should set edit unfound expense', () =>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        update: {amount: 0}
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[0]]
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([expenses[0]])
})