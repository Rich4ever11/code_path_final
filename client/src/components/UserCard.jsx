import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function UserCard({ user, setDetails }) {
  return (
    <div>
      <Card
        shadow="lg"
        isPressable
        onPress={() => setDetails(user)}
        className="h-[525px] w-[500px]"
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={user.name}
            className="w-full object-cover h-[425px]"
            src={user.imgurl[0]}
          />
        </CardBody>
        <CardFooter className="justify-between py-12">
          <b className="text-white text-4xl font-thin">{user.name}</b>
          <p className="text-default-500 text-4xl font-thin border-1 rounded-xl p-2">
            {"Send Invitation"}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
