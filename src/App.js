import "./App.css";

import Router from "./router/router";
import Store from "./store";
import { initialState as auth } from "./store/session";
//const db = firebase.initializeApp(firebaseConfig);
import firebase from 'firebase';
const usuario = firebase.auth().currentUser;

function App() {
  return (
    <div className="App">
      <Store.Provider initialState={auth}>
        <Router />
      </Store.Provider>
    </div>
  );
}

export default App;
