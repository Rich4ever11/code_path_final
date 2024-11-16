import React, { useEffect, useState } from "react";
import { Input, Avatar, Button } from "@nextui-org/react";
import { IoIosChatboxes } from "react-icons/io";
import chatAPI from "../api/chat";

export default function Conversation({
  connection_id,
  user_id,
  username,
  user_profile_pic,
  receiver_username,
  receiver_profile_pic,
}) {
  console.log(connection_id);
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const renderChat = async () => {
      if (connection_id) {
        const conversation = await chatAPI.renderChatMessages(connection_id);
        setConversation(conversation);
        console.log(conversation);
      }
    };
    renderChat();
  }, []);

  const handleMessageCreation = async () => {
    const requestBody = {
      user_id: user_id,
      connection_id: connection_id,
      message: message,
    };
    const response = await chatAPI.createMessage(requestBody);
    setMessage("");
  };

  return (
    <div className="bg-black/50 w-full h-screen">
      <div className="flex justify-center py-2">
        <div className="px-2 flex items-center">
          <Avatar
            className="border-4 border-cyan-50 h-24 w-24 text-large "
            src={receiver_profile_pic}
          />
        </div>
        <h1 className="p-4 text-white font-thin italic text-6xl underline">
          @{receiver_username}
        </h1>
      </div>

      <div className="flex flex-col-reverse">
        <div className="">
          {conversation.map((chat, index) =>
            user_id === chat.user_id ? (
              <div className="">
                <div className="flex ml-32 mr-8 py-4">
                  <div className="w-full rounded-t-lg rounded-l-lg bg-slate-950 border-2 border-white/90">
                    <header className="my-2 mx-4 text-md text-white font-thin">
                      <h4>@{username}</h4>
                      <p>{chat.created_at}</p>
                    </header>
                    <p className="m-4 text-white text-xl font-thin">
                      {chat.message}
                    </p>
                  </div>
                  <div className="px-4 flex items-end">
                    <Avatar
                      className="border-2 border-cyan-50 w-20 h-20 text-large"
                      size="lg"
                      src={user_profile_pic}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div key={index}>
                <div className="flex mr-32 ml-8 py-4">
                  <div className="px-4 flex items-end">
                    <Avatar
                      className="border-2 border-cyan-50 w-20 h-20 text-large"
                      src={receiver_profile_pic}
                    />
                  </div>
                  <div className="w-full rounded-t-lg rounded-r-lg bg-slate-950 border-2 border-white/90">
                    <header className="my-2 mx-4 text-md text-white font-thin">
                      <h4>@{receiver_username}</h4>
                      <p>{chat.created_at}</p>
                    </header>
                    <p className="m-4 text-white text-xl font-thin">
                      {chat.message}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}

          <div className="flex ml-32 mr-8">
            <div className="w-full">
              <Input
                type="chat"
                label="Message"
                variant="bordered"
                className="w-auto"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              <div className="flex flex-row-reverse">
                <Button
                  color="white"
                  variant="bordered"
                  className="text-white text-lg m-2"
                  onClick={handleMessageCreation}
                  startContent={<IoIosChatboxes size={24} />}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className="px-4">
              <Avatar
                className="border-2 border-cyan-50 w-20 h-20 text-large"
                src={user_profile_pic}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
