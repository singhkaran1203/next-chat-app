"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaRegUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";

interface Message {
  id: number;
  content: string;
  sender: string;
}
const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "this is first message",
      sender: "You",
    },
    {
      id: 2,
      content: "this is second message",
      sender: "",
    },
    {
      id: 3,
      content: "this is third message",
      sender: "You",
    },
    {
      id: 4,
      content: "this is fourth message",
      sender: "",
    },
    {
      id: 5,
      content: "this is fifth message",
      sender: "You",
    },
    {
      id: 6,
      content: "this is sixth message",
      sender: "",
    },
  ]);
  const [newMessage, setNewMessage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom on new message
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    const message: Message = {
      id: messages.length + 1,
      content: newMessage.trim(),
      sender: "You", // For demonstration purposes, assuming sender is always 'You'
    };
    setMessages([...messages, message]);
    setNewMessage("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white shadow-md p-2 flex items-center justify-between">
        <div className="text-slate-500 text-2xl p-3">
          <FaRegUser />
        </div>
        <div className="w-full flex-grow">
          <h1 className="font-bold text-md">Karan Singh</h1>
          <h3 className="text-xs text-gray-600">last seen 3 hours ago</h3>
        </div>
        <div className="flex gap-3 text-xl text-gray-400">
          <FaPhoneAlt />
          <MdVideoCall className="text-2xl" />
          <SlOptions />
        </div>
      </div>
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${
              message.sender === "You" ? "text-right" : "text-left"
            } mb-2`}
          >
            <div
              className={`${
                message.sender === "You"
                  ? "bg-pink-700 text-white self-end"
                  : "bg-gray-300"
              } p-2 inline-block rounded-xl text-sm font-normal`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="bg-gray-100 p-4 flex items-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type a message..."
          className="flex-grow p-2 mr-4 rounded-full outline-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <div className="flex gap-2 text-xl text-slate-500">
          <button>
            <MdEmojiEmotions />
          </button>
          <button>
            <FaMicrophone />
          </button>
          <button
            className="bg-pink-700 text-white text-xl p-2 rounded-full outline-none hover:bg-blue-600"
            onClick={handleSendMessage}
          >
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;