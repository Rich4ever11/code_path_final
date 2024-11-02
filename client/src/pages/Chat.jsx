import React from "react";
import UserChatFooter from "../components/UserChatFooter";

export default function Chat() {
  return (
    <div className="flex bg-white">
      <div className="basis-1/4">
        <UserChatFooter />
      </div>
      <div className="bg-white">Chat</div>
    </div>
  );
}
