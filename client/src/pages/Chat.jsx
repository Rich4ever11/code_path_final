import React from "react";
import UserChatFooter from "../components/UserChatFooter";
import Conversation from "../components/Conversation";

export default function Chat() {
  return (
    <div className="flex h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1691627497619-f2cf7fcf7f3d?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="basis-1/4">
        <UserChatFooter />
      </div>
      <div className="basis-3/4">
        <Conversation />
      </div>
    </div>
  );
}
