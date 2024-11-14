import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function UserCard(username) {
  return (
    <div>
      <Card
        shadow="lg"
        isPressable
        onPress={() => console.log("item pressed")}
        className="h-[525px] w-[500px]"
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={username}
            className="w-full object-cover h-[425px]"
            src={
              "https://plus.unsplash.com/premium_photo-1689632031083-518b012767a4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </CardBody>
        <CardFooter className="justify-between py-12">
          <b className="text-white text-4xl font-thin">{"John Kelly"}</b>
          <p className="text-default-500 text-4xl font-thin border-1 rounded-xl p-2">
            {"Send Invitation"}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
