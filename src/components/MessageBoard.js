import CreateReaction from "./CreateReaction";
import { useAppContext } from "./hooks";
import MessageReactions from "./MessageReactions";

const MessageBoard = () => {
  const {
    state: { messages, reactionsMap },
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
            <CreateReaction messageId={id} />
            <MessageReactions messageReactions={reactionsMap[id]} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default MessageBoard;
