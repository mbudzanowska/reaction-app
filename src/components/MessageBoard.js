import { useContext } from "react";
import Context from "../context";

const MessageBoard = () => {
  const {
    state: { messages },
  } = useContext(Context);

  return (
    <div>
      {messages.map((message) => {
        const { id, text, timestamp } = message;
        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
            <p>{text}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default MessageBoard;
