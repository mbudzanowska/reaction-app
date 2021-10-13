import { useReducer } from "react";
import reducer, { initialState } from "../state/reducer";
import MessageBoard from "./MessageBoard";
import PublishMessage from "./PublishMessage";
import Context from "../context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <h1>Reaction</h1>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  );
}

export default App;
