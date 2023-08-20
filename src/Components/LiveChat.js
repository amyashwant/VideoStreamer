import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessaage] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className=" p-2 w-full border border-black h-[600px] rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {messages.map((chat, index) => {
            return (
              <ChatMessage
                key={index}
                name={chat.name}
                message={chat.message}
              />
            );
          })}
        </div>
      </div>
      <form
        className="p-2 w-full border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "yashwant singh",
              message: liveMessage,
            })
          );
          setLiveMessaage("");
        }}
      >
        <input
          className="px-2 w-95"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessaage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">send</button>
      </form>
    </>
  );
};

export default LiveChat;
