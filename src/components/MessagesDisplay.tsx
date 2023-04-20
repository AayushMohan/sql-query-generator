import MessageDisplay from "./MessageDisplay";

type Props = {};

const MessagesDisplay = (props: Props) => {
  return (
    <div className="messages-display">
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
      <MessageDisplay />
    </div>
  );
};

export default MessagesDisplay;
