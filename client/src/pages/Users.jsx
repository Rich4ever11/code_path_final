import React from "react";
import UserSearch from "../components/UserSearch";
import UserDetails from "../components/UserDetails";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Input,
  Button,
} from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import UserConnectionRequest from "../components/UserConnectionRequest";

export default function Users() {
  return (
    <div className="h-full bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1687706713773-c8a071630d7c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="m-8">
        <div className="py-8">
          {/* <h1
            className="text-8xl text-white font-thin underline italic"
            style={{ textShadow: "1px 5px 5px black" }}
          >
            User Dashboard
          </h1> */}
        </div>
        <div className="w-full py-4 flex">
          <Input
            type="search"
            size={"lg"}
            startContent={<CiSearch size={32} />}
          />
        </div>
      </div>
      <UserConnectionRequest />
      <div className="flex">
        <div className="basis-2/6 px-10">
          <UserSearch />
        </div>
        <div className="basis-4/6 ">
          <UserDetails />
        </div>
      </div>
    </div>
  );
}
