import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import connectionAPI from "../api/connection";
import { useNavigate } from "react-router-dom";

export default function UserConnectionRequest({ loggedInUser }) {
  const [pendingConnections, setPendingConnections] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleConnections = async () => {
      const connections = await connectionAPI.handleGetConnections(
        loggedInUser
      );
      console.log(connections);
      setPendingConnections(connections);
    };
    handleConnections();
  }, []);

  const handleConnectionAccept = async (connection_id) => {
    const requestBody = {
      connection_id,
    };
    const result = await connectionAPI.handleAcceptConnection(requestBody);
    navigate("/chat");
  };

  const handleConnectionReject = async (connection_id) => {
    const requestBody = {
      connection_id,
    };
    const result = await connectionAPI.handleRejectConnection(requestBody);
    navigate("/chat");
  };

  return (
    <div className="bg-slate-900/50 my-4 w-full">
      <div className="m-2">
        <h1
          className="text-6xl text-white font-thin underline italic"
          style={{ textShadow: "1px 5px 5px black" }}
        >
          User Requests
        </h1>
      </div>
      <div className="flex py-2 pb-4 space-x-8 overflow-auto">
        {pendingConnections.map((connection, key) => (
          <div className="relative shrink-0 m-2">
            <Avatar
              src={connection.imgurl[0]}
              size="lg"
              isBordered
              className="w-32 h-32 text-large"
            />
            <div className="pt-4 flex absolute bottom-0 right-0">
              <Button
                className={""}
                color="primary"
                radius="full"
                size="sm"
                onClick={() => handleConnectionAccept(connection.connection_id)}
              >
                {"Accept"}
              </Button>
              <Button
                className={""}
                color="danger"
                radius="full"
                size="sm"
                onClick={() => handleConnectionReject(connection.connection_id)}
              >
                {"Decline"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
