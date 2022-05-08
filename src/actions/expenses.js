import {v4 as uuid} from 'uuid'
import { database } from '../firebase/firebase';
import {ref, push, get} from "firebase/database";
export const addExpense = (expense) =>({
    type: "ADD_EXPENSE",
    expense
    });

export const startAddExpense = (expenseData = {}) =>{
    return (dispatch) =>{
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt};

        return push(ref(database, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
};

export const removeExpense = ({ id } = {}) => ({
    type:  'REMOVE_EXPENSE',
    id
})

export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpense = () =>{
    return (dispatch) =>{
        return get(ref(database, 'expenses')).then((snapshot)=>{
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
        
        
    }
}
