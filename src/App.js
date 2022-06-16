import "./styles.css";
import store from "./redux";
import { Provider } from "react-redux";
import Users from "./Compoents/Users";
import Commetns from "./Compoents/Comments";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Users />
        <Commetns />
      </div>
    </Provider>
  );
}
