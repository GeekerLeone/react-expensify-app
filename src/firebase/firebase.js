import { initializeApp } from 'firebase/app';
import { DataSnapshot, get, getDatabase, off, onValue, ref, remove, set, update, push, onChildMoved, onChildRemoved, onChildChanged, onChildAdded} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase();


// set(ref(database), {
//   name: 'Andrew',
//   age:26,
//   stressLevel: 6,
//   job: {
//       title: 'SDE',
//       company: 'Amazon'
//   },
//   location:{
//       city:'LA',
//       state: 'CA'
//   }
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log('This failed', e)
// });

// set(ref(database,'location/city'), 'Los Angeles');

// set(ref(database, 'attributes'),{
//     height: 185,
//     weight: 80
// });


// update(ref(database),{
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })


// remove(ref(database)).then(() =>{
//     console.log('Deleted successfully!')
// }).catch((e) => {
//     console.log('Something went wrong!')
// });

// get(ref(database, 'location/city')).then((snapshot) => {
//     console.log(snapshot.val())
// }).catch((e) => {
//     console.log('This failed:', e)
// })

// onValue(ref(database, 'age'), (snapshot)=>{
//     console.log(snapshot.val())
// })

// setTimeout(() => {
//     set(ref(database, 'age'), 27)
// }, 5000)

// setTimeout(() => {
//     off(ref(database, 'age'))
// }, 5000)

// setTimeout(() => {
//     set(ref(database, 'age'), 28)
// }, 5000)

// get(ref(database)).then((snapshot) =>{
//     const props = snapshot.val();
//     console.log(`${props.name} is a ${props.job.title} at ${props.job.company}`) 
// })

// onValue(ref(database), (snapshot)=>{
//     const props = snapshot.val();
//     console.log(`${props.name} is a ${props.job.title} at ${props.job.company}`) 
// })

// update(ref(database), {
//     name: 'Mike',
//     'job/title': 'manager',
//     'job/company': 'Google'
// })
// push(ref(database,'expenses'), {
//         description:'1',
//         amount:100
//     });

// push(ref(database,'expenses'), {
//         description:'4',
//         amount:100
//     }).then((ref) =>{
//         console.log({
//             id: ref.key,
//             amount: ref.amount
//         })
//     })

// get(ref(database,'expenses')).then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//             // console.log(childSnapshot.val())
//         })
//     });
//     // console.log(snapshot.val());
//     console.log(expenses);
// })

// onValue(ref(database,'expenses'),(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// })

// onChildRemoved(ref(database, 'expenses'),(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// onChildChanged(ref(database, 'expenses'),(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// onChildAdded(ref(database, 'expenses'),(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// push(ref(database,'expenses'), {

//     description:'3',
//     amount:100
// })
