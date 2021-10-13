import { useAppContext } from "./hooks";

const MessageBoard = () => {
  const {
    state: { messages },
  } = useAppContext();

  return (
    <div>
      {messages.map((message) => {
        const { id, text, timestamp, username } = message;
        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleDateString()}</h4>
            <p>{text}</p>
            <h5>- {username}</h5>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default MessageBoard;
