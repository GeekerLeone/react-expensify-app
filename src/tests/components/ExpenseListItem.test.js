import React from "react";
import { shallow } from "enzyme";
import expenses from '../fixtures/expenses'
import {expenseItem} from '../../components/ExpenseListItem'

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<expenseItem expenses={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListItem correctly with empty expense', () => {
    const wrapper = shallow(<expenseItem expenses={[]}/>)
    expect(wrapper).toMatchSnapshot();
})