import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function UserDetails() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <div className="m-20">
      <Card className="w-full h-screen">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="">
              <Avatar
                radius="full"
                size="lg"
                className="h-[400px] w-[400px] shadow-md shadow-cyan-50"
                src="https://nextui.org/avatars/avatar-1.png"
              />
            </div>

            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-6xl font-semibold leading-none text-default-600 py-2 underline">
                Zoey Lang
              </h4>
              <h5 className="text-4xl tracking-tight text-white">@zoeylang</h5>
              <div className="py-4">
                <Button
                  className={
                    isFollowed
                      ? "bg-transparent text-foreground border-default-200"
                      : ""
                  }
                  color="primary"
                  radius="full"
                  size="lg"
                  variant={isFollowed ? "bordered" : "solid"}
                  onPress={() => setIsFollowed(!isFollowed)}
                >
                  {isFollowed ? "Disconnect" : "Connect"}
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="border-2 rounded-3xl bg-slate-950/50 w-auto px-3 py-0 text-4xl font-thin text-default-400 m-8 p-8">
          <p className="text-white">I am the smartest when im not :0</p>
        </CardBody>
        {/* <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter> */}
      </Card>
    </div>
  );
}
