import { createReaction } from "../state/actions";
import { REACTION_OBJECTS } from "../state/types";
import { useAppContext } from "./hooks";

const CreateReaction = ({ messageId }) => {
  const {
    pubsub: { publish },
    state: { username },
  } = useAppContext();

  const publishReaction =
    ({ type, emoji }) =>
    () => {
      publish(createReaction({ emoji, type, username, messageId }));
    };

  return (
    <div className="CreateReaction">
      {REACTION_OBJECTS.map((REACTION_OBJECT) => {
        const { type, emoji } = REACTION_OBJECT;
        return (
          <span key={type} 
          onClick={publishReaction({type, emoji})}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

export default CreateReaction;
