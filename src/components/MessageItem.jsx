import { FaRobot } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

function MessageItem({ message }) {
  const classess = message.from == "bot" ? "bg-slate-200" : "bg-green-200 self-end flex-row-reverse";

  return (
    <li className={`py-2 px-2 rounded-md flex items-center gap-4 max-w-[90%] min-w-[90%] ${classess}`}>
      <span>{message.from == "bot" ? <FaRobot color="blue" /> : <AiOutlineUser color="green" />}</span>
      {message.message}
    </li>
  );
}

export default MessageItem;
