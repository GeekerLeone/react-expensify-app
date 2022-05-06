import filterReducer from "../../reducers/filters";
import moment from "moment";

test('should setup default filter value', ()=> {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should setup filter with sortBy amount', ()=> {
    const state = filterReducer({sortBy: undefined}, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount')
})

test('should setup filter with sortBy date', ()=> {
    const state = filterReducer({sortBy: undefined}, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toEqual('date')
})

test('should setup filter with text', ()=> {
    const state = filterReducer({text: undefined}, {type: 'SET_TEXTFILTER', text:'asd'});
    expect(state.text).toEqual('asd')
})

test('should setup filter with start date', ()=> {
    const state = filterReducer({startDate: undefined}, {type: 'SET_START_DATE', startDate:123456});
    expect(state.startDate).toEqual(123456)
})

test('should setup filter with end date', ()=> {
    const state = filterReducer({endDate: undefined}, {type: 'SET_END_DATE', endDate:123456});
    expect(state.endDate).toEqual(123456)
})