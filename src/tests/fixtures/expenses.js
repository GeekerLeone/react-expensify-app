import moment from "moment"
export default [{
    id:'0',
    description: 'Gum',
    note: '',
    amount: 10,
    createdAt:0
},{
    id:'1',
    description: 'Rent',
    note: '',
    amount: 100,
    createdAt:moment(0).subtract(3, 'days').valueOf()
},{
    id:'2',
    description: 'Credit Card',
    note: '',
    amount: 200,
    createdAt:moment(0).add(5, 'days').valueOf()
}]