import React from "react";
import { Input, Avatar, Button } from "@nextui-org/react";
import { IoIosChatboxes } from "react-icons/io";

export default function Conversation() {
  const userChats = [{}];
  const renderChat = () => {};

  return (
    <div className="bg-black/50 w-full h-screen">
      <div className="flex justify-center py-2">
        <div className="px-2 flex items-center">
          <Avatar
            className="border-4 border-cyan-50 py-2 h-24 w-24 text-large "
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </div>
        <h1 className="p-4 text-white font-thin italic text-6xl underline">
          John Staffman
        </h1>
      </div>

      <div className="flex flex-col-reverse">
        <div className="">
          <div className="flex ml-32 mr-8 py-4">
            <div className="w-full rounded-t-lg rounded-l-lg bg-slate-950 border-2 border-white/90">
              <header className="my-2 mx-4 text-md text-white font-thin">
                <h4>John Staffman</h4>
                <p>Thu Mar 24 2022 20:00:00 GMT-0400 (Eastern Daylight Time)</p>
              </header>
              <p className="m-4 text-white text-xl font-thin">
                We are the greatest of the developers We are the greatest of the
                developers We are the greatest of the developers We are the
                greatest of the developers We are the greatest of the developers
                We are the greatest of the developers We are the greatest of the
                developers v We are the greatest of the developers
              </p>
            </div>
            <div className="px-4 flex items-end">
              <Avatar className="border-2 border-cyan-50 py-2 h-14 w-14" />
            </div>
          </div>

          <div className="flex mr-32 ml-8 py-4">
            <div className="px-4 flex items-end">
              <Avatar
                className="border-2 border-cyan-50 py-2 h-14 w-14"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </div>
            <div className="w-full rounded-t-lg rounded-r-lg bg-slate-950 border-2 border-white/90">
              <header className="my-2 mx-4 text-md text-white font-thin">
                <h4>John Staffman</h4>
                <p>Thu Mar 24 2022 20:00:00 GMT-0400 (Eastern Daylight Time)</p>
              </header>
              <p className="m-4 text-white text-xl font-thin">
                We are the greatest of the developers We are the greatest of the
                developers We are the greatest of the developers We are the
                greatest of the developers We are the greatest of the developers
                We are the greatest of the developers We are the greatest of the
                developers v We are the greatest of the developers
              </p>
            </div>
          </div>

          <div className="flex ml-32 mr-8">
            <div className="w-full">
              <Input
                type="chat"
                label="Message"
                variant="bordered"
                className="w-auto"
              />
              <div className="flex flex-row-reverse">
                <Button
                  color="white"
                  variant="bordered"
                  className="text-white text-lg m-2"
                  startContent={<IoIosChatboxes size={24} />}
                >
                  Submit
                </Button>
              </div>
            </div>
            <div className="px-4">
              <Avatar className="border-2 border-cyan-50 py-2 h-14 w-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
