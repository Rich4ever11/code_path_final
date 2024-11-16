import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { ScrollShadow } from "@nextui-org/react";
import userAPI from "../api/user";

export default function UserSearch({ setUserDetails, loggedInUser }) {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const handleUserListRender = async () => {
      const usersData = await userAPI.getAllUsers();
      const filteredUserData = usersData.filter(
        (user) => user.id !== loggedInUser
      );
      setUserList(filteredUserData);
    };
    handleUserListRender();
  }, []);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col justify-center ">
        <ScrollShadow
          hideScrollBar
          className="h-screen overflow-y-scroll space-y-10"
        >
          {userList.map((user, index) => (
            <UserCard key={index} user={user} setDetails={setUserDetails} />
          ))}
        </ScrollShadow>
      </div>
    </div>
  );
}
