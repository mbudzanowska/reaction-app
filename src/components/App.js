import { useReducer } from "react";
import reducer, { initialState } from "../state/reducer";
import MessageBoard from "./MessageBoard";
import PublishMessage from "./PublishMessage";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div>
      <h1>Reaction</h1>
      <hr />
      <PublishMessage dispatch={dispatch} />
      <hr />
      <MessageBoard messages={state.messages} />
    </div>
  );
}

export default App;
