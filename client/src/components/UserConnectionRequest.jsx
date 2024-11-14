import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function UserConnectionRequest() {
  return (
    <div className="bg-slate-900/50 my-4 w-full">
      {/* <div className="m-2">
        <h1
          className="text-6xl text-white font-thin underline italic"
          style={{ textShadow: "1px 5px 5px black" }}
        >
          User Requests
        </h1>
      </div> */}
      <div className="flex py-2 pb-4 space-x-8 w-full overflow-auto">
        <div className="relative shrink-0">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-30 h-30 text-large"
          />
          <div className="py-4 absolute bottom-0 right-0 ">
            <Button className={""} color="primary" radius="full" size="sm">
              {"Accept Connect"}
            </Button>
          </div>
        </div>
        <div className="relative shrink-0">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-30 h-30 text-large"
          />
          <div className="py-4 absolute bottom-0 right-0 ">
            <Button className={""} color="primary" radius="full" size="sm">
              {"Accept Connect"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
