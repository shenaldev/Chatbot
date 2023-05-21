import "./assets/css/styles.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
//IMPORT COMPONENTS
import Card from "./components/Card";
import ChatBox from "./components/ChatBox";
import Header from "./components/Header";
import Messages from "./components/Messages";
import { getBotResponse } from "./util/botResponse";

function App() {
  const [messageList, setMessageList] = useState([{ id: 1, from: "bot", message: "What is your name?" }]);
  const [userName, setUserName] = useState(false);

  /**
   * ON USERNAME SET DISPLAY BOT RESPONSE MESSAGE
   */
  useEffect(() => {
    if (messageList.length <= 2 && userName != false) {
      setMessageList((prevMessage) => {
        return [...prevMessage, { id: uuidv4(), from: "bot", message: "Hello " + userName + ". How can I help you today?" }];
      });
    }
  }, [messageList, userName]);

  /**
   * GIVE ANSWERS TO USER MESSAGE
   * @param {*} message Users Message
   * @returns Bot Reply
   */
  function addUserMessage(message) {
    /** IF USER ENTER HIS NAME SET USERNAME STATE */
    if (messageList.length == 1) {
      setUserName(message);
      setMessageList((prevMessage) => {
        return [...prevMessage, { id: uuidv4(), from: "user", message: message }];
      });
      return;
    }
    //ELSE GIVE ANSWERS TO USER
    setMessageList((prevMessage) => {
      return [...prevMessage, { id: uuidv4(), from: "user", message: message }];
    });
    setMessageList((prevMessage) => {
      return [...prevMessage, { id: uuidv4(), from: "bot", message: getBotResponse(message) }];
    });
  }

  return (
    <div className="app w-screen h-screen grid place-items-center">
      <div className="mx-4">
        <Card>
          <Header />
          <ChatBox onAdd={addUserMessage} />
          <Messages messages={messageList} />
        </Card>
      </div>
    </div>
  );
}

export default App;
