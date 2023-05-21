import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

function ChatBox({ onAdd }) {
  const [message, setmessage] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    onAdd(message);
    setmessage("");
    setTimeout(() => {
      const messageListEle = document.getElementById("message-list");
      messageListEle.scrollTop = messageListEle.scrollHeight;
    }, 100);
  }

  function inputChangeHandler(e) {
    setmessage(e.target.value);
  }

  return (
    <div className="absolute bottom-0 left-0 w-full bg-slate-200 rounded-b-md">
      <form className="flex" onSubmit={submitHandler}>
        <input
          type="text"
          name="message"
          id="message"
          className="px-4 py-3 border-none outline-none w-full rounded-b-md bg-slate-200"
          required
          placeholder="Type Your Message"
          value={message}
          onChange={inputChangeHandler}
        />
        <button>
          <AiOutlineSend color="blue" size="1.6rem" className="mx-4" />
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
