import React, { useEffect, useState } from "react";
import UserChatFooter from "../components/UserChatFooter";
import Conversation from "../components/Conversation";
import { UseUserContext } from "../context/userContext";
import connectionAPI from "../api/connection";

export default function Chat() {
  const { currentUser, userDetails, userLoggedIn, loading } = UseUserContext();
  const [userConnections, setUserConnections] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState({});

  useEffect(() => {
    const handleConnectionsRender = async () => {
      const connections = await connectionAPI.handleGetValidConnections(
        userDetails.id
      );
      const filteredConnections = connections.filter(
        (connection) => connection.user_id !== userDetails.id
      );
      console.log("THIS IS THE API CALL", filteredConnections);
      setUserConnections(filteredConnections);
    };
    handleConnectionsRender();
  }, []);

  return (
    <div className="flex h-screen bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1691627497619-f2cf7fcf7f3d?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="basis-1/4">
        <UserChatFooter
          connections={userConnections}
          selectConnection={setSelectedConversation}
        />
      </div>
      <div className="basis-3/4">
        {selectedConversation.connection_id && (
          <Conversation
            key={selectedConversation}
            connection_id={selectedConversation.connection_id}
            user_id={userDetails.id}
            username={userDetails.username}
            user_profile_pic={userDetails.imgurl[0]}
            receiver_username={selectedConversation.username}
            receiver_profile_pic={selectedConversation.imgurl[0]}
          />
        )}
      </div>
    </div>
  );
}
