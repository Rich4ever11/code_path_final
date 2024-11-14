import React from "react";
import UserCard from "./UserCard";
import { ScrollShadow } from "@nextui-org/react";

export default function UserSearch() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col justify-center ">
        <ScrollShadow
          hideScrollBar
          className="h-screen overflow-y-scroll space-y-10"
        >
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </ScrollShadow>
      </div>
    </div>
  );
}
