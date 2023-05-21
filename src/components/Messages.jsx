import MessageItem from "./MessageItem";

function Messages({ messages }) {
  return (
    <div className="mt-8">
      <ul className="flex gap-4 flex-col overflow-y-auto max-h-80" id="message-list">
        {messages.map((message) => {
          return <MessageItem key={message.id} message={message} />;
        })}
      </ul>
    </div>
  );
}

export default Messages;
