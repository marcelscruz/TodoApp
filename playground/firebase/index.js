import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD3O5_7eIodTEVa0OmIyy9Jf4sjLLifLK8",
    authDomain: "todo-app-7a172.firebaseapp.com",
    databaseURL: "https://todo-app-7a172.firebaseio.com",
    projectId: "todo-app-7a172",
    storageBucket: "todo-app-7a172.appspot.com",
    messagingSenderId: "607716577736"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Marcel',
    age: 26
  }
});


// ARRAYS AND LISTENERS

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'walk the dog'
// });
// OR
// var newNoteRef2 = notesRef.push({
//   text: 'walk the dog2'
// });
// console.log('todo id', newNoteRef.key);

// create var store ref to todos[], child_added print key and val, add two todos(push), refresh

// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'test1'
// });
//
// todosRef.push({
//   text: 'test2'
// });


// FETCH DATA

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value', e);
// });


// use on, update user name, update app name,
// var logChanges = (snapshot) => {
//   console.log('value changed', snapshot.val());
// };
//
// firebaseRef.child('user').on('value', logChanges);
//
// firebaseRef.child('user').update({name: 'test'});
//
// firebaseRef.child('app').update({name: 'test2'});

// var logData = (snapshot) => {
//   console.log('got value', snapshot.val());
// };

// firebaseRef.on('value', logData);

// firebaseRef.off('value', logData);

// firebaseRef.update({isRunning: false});


// UPDATE DATA

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo App2'
// }).then(() => {
//   console.log('update worked');
// }, (e) => {
//   console.log('update failed');
// });

// firebaseRef.update({
//   'app/name': 'todoapp1',
//   'user/name': 'santos'
// });
//
// firebaseRef.child('app').update({
//   name: 'todoapp2'
// });

// REMOVE DATA

// firebaseRef.child('user').update({
//   name: 'cruz'
// });

// firebaseRef.child('user/age').remove();
