import Main from "./Screens/index";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
