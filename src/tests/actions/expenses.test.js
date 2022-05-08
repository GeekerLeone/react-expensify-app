import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { database } from '../../firebase/firebase';
import {ref, push, get} from "firebase/database";

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[1]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:expenses[1]
})
}) 

test('should add expense to database and store', (done)=> {
    const store = createMockStore({});
    const expenseData = {
        description: 'Rent',
        amount: 100,
        note: 'paid',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })

        return get(ref(database, `expenses/${actions[0].expense.id}`))
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done()
    })
})

test('should add expense with default to database and store', (done)=> {
    const store = createMockStore({});
    const expenseData = {
        description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })

        return get(ref(database, `expenses/${actions[0].expense.id}`))
        
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done()
    })
})

test('should add expense to database and store', ()=> {
    
})
// test('should setup add expense action object with default values', () =>{
//     const expenseData = {};
//     const action = addExpense(expenseData);
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             id:expect.any(String),
//             description: '', 
//             note: '', 
//             amount: 0, 
//             createdAt: 0
//         }
        
//     })
// }) 