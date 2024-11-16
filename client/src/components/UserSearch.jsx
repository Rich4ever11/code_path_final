import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { ScrollShadow } from "@nextui-org/react";

export default function UserSearch({
  setUserDetails,
  usersList,
  loggedInUser,
}) {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col justify-center ">
        <ScrollShadow
          hideScrollBar
          className="h-screen overflow-y-scroll space-y-10"
        >
          {usersList.map((user, index) => (
            <UserCard key={index} user={user} setDetails={setUserDetails} />
          ))}
        </ScrollShadow>
      </div>
    </div>
  );
}
