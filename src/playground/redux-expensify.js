import { legacy_createStore as createStore, combineReducers} from 'redux'
import {v4 as uuid} from 'uuid'

const addExpense = ({
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
} = {}) =>({
    type: "ADD_EXPENSE",
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }})

const removeExpense = ({ id } = {}) => ({
    type:  'REMOVE_EXPENSE',
    id
})

const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});

const setTextFilter = (text = '') =>({
    type: 'SET_TEXTFILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id != action.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id == action.id){
                    return {
                        ...expense, 
                        ...action.update
                    };
                }else{
                    return expense;
                }
                
            });
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) =>{
    switch(action.type){
        case 'SET_TEXTFILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }

}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy == 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;

        }else if(sortBy == 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(combineReducers(
    {
        expenses: expensesReducer,
        filter: filterReducer
    }
));
store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
    console.log(visibleExpenses)
})


const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 5000, createdAt:50}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 2500, createdAt:500}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));


const demoState = {
    expenses:[{
        id: 'qetqe',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filter:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
