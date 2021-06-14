import "./App.css";

import Router from "./router/router";
import Store from "./store";
import { initialState as auth } from "./store/session";

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
