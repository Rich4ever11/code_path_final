import React from "react";

import { Avatar } from "@nextui-org/react";

export default function UserChatFooter() {
  const userChat = [
    {
      avatarImgUrl: "",
    },
  ];

  return (
    <div className="h-screen bg-black/75">
      <div className="flex p-2 hover:bg-black transition duration-700 ease-in-out ">
        <div className="content-center">
          <div className="border-3 border-cyan-50 rounded-full p-1 shadow-md shadow-black">
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              className="w-20 h-20 text-large"
            />
          </div>
        </div>

        <div className="grid p-2">
          <h1 className="text-white font-thin text-2xl">John Staffman</h1>
          <h6 className="text-white font-thin text-sm">2/1/2013 7:37:08 AM</h6>
          <h3 className="max-w-72 overflow-clip h-12">
            What is the value you add to this application... What is the value
            you add to this application..What is the value you add to this
            application..
          </h3>
        </div>
      </div>
      <hr class="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
    </div>
  );
}
