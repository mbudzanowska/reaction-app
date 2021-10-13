import { useState } from "react";
import { newMessage } from "../state/actions";
import { useAppContext } from "./hooks";

const PublishMessage = () => {
  const [text, setText] = useState("");

  const {
    pubsub: { publish },
    state: { username },
  } = useAppContext();

  const updateText = (event) => {
    setText(event.target.value);
  };

  const publishMessage = () => {
    publish(newMessage({ text, username }));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      publishMessage();
    }
  };

  return (
    <div>
      <h3>Got something to say?</h3>
      <input
        value={text}
        onChange={updateText}
        onKeyPress={handleKeyPress}
      />{" "}
      <button onClick={publishMessage}>Publish it!</button>
    </div>
  );
};

export default PublishMessage;
