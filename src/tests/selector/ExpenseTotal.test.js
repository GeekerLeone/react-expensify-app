import selectExpensesTotal from '../../selectors/ExpenseTotal';
import expenses from '../fixtures/expenses';

test("should return 0 if no expense", ()=>{
    const res = selectExpensesTotal([]);
    expect(res).toBe(0)
})

test("should correctly add a single expense", ()=>{
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(expenses[0].amount)
})

test("should correctly add multiple expense", ()=>{
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(310)
})