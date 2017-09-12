import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyD3O5_7eIodTEVa0OmIyy9Jf4sjLLifLK8",
      authDomain: "todo-app-7a172.firebaseapp.com",
      databaseURL: "https://todo-app-7a172.firebaseio.com",
      projectId: "todo-app-7a172",
      storageBucket: "todo-app-7a172.appspot.com",
      messagingSenderId: "607716577736"
    };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
