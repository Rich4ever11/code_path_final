import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import connectionAPI from "../api/connection";

export default function UserDetails({ userDetails, send_user }) {
  const [isConnected, setIsConnected] = React.useState(false);

  const handleConnectionToggle = async () => {
    if (isConnected === false) {
      handleUserConnection();
      setIsConnected(!isConnected);
    } else {
      handleUserDisconnect();
    }
  };

  const handleUserConnection = async () => {
    const requestBody = {
      send_user: send_user,
      receive_user: userDetails.id,
    };
    const result = await connectionAPI.handleConnectionCreation(requestBody);
  };

  const handleUserDisconnect = async () => {
    console.log("connection already made");
  };

  return (
    <div className="m-20">
      <Card className="w-full h-screen">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="">
              <Avatar
                radius="full"
                size="lg"
                className="h-[400px] w-[400px] shadow-md shadow-cyan-50"
                src={userDetails.imgurl[0]}
              />
            </div>

            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-6xl font-semibold leading-none text-default-600 py-2 underline">
                {userDetails.first_name + " " + userDetails.last_name}
              </h4>
              <h5 className="text-4xl tracking-tight text-white">
                @{userDetails.username}
              </h5>
              <div className="py-4">
                <Button
                  className={
                    isConnected
                      ? "bg-transparent text-foreground border-default-200"
                      : ""
                  }
                  color="primary"
                  radius="full"
                  size="lg"
                  variant={isConnected ? "bordered" : "solid"}
                  onPress={() => handleConnectionToggle()}
                >
                  {isConnected ? "Disconnect" : "Connect"}
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="border-2 rounded-3xl bg-slate-950/50 w-auto px-3 py-0 text-4xl font-thin text-default-400 m-8 p-8">
          <p className="text-white">{userDetails.bio}</p>
        </CardBody>
      </Card>
    </div>
  );
}
