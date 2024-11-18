import React from "react";

import { Avatar, Button } from "@nextui-org/react";

export default function UserChatFooter({ connections, selectConnection }) {
  return (
    <div className="h-screen bg-black/10 w-full">
      <div className="p-2">
        {connections.map((connection) => (
          <>
            <div className="flex">
              <Button
                className="h-full w-[450px] bg-black m-0 py-4 "
                onClick={() => selectConnection(connection)}
              >
                <div className="content-start">
                  <div className="border-3 border-cyan-50 rounded-full p-1 shadow-md shadow-black">
                    <Avatar
                      src={connection.imgurl[0]}
                      className="w-20 h-20 text-large"
                    />
                  </div>
                </div>
                <div className="grid p-2">
                  <h1 className="text-white font-thin text-4xl ">
                    {connection.first_name + " " + connection.last_name}
                  </h1>

                  <h1 className="text-white font-thin text-2xl ">
                    {connection.username}
                  </h1>
                </div>
                <hr className="bg-white py-2"></hr>
              </Button>
            </div>
          </>
        ))}
      </div>
      <hr class="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
    </div>
  );
}
