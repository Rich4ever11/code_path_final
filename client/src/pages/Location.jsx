import React from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "@nextui-org/react";

export default function Location() {
  const { id } = useParams();

  return (
    <div>
      <div className="flex p-4">
        <div className="border-medium border-cyan-100 rounded-full p-1">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-24 h-24 text-large  "
          />
        </div>
        <div className="grid-flow-col px-4 py-1 w-full">
          <div className="text-white font-thin text-4xl">
            {"Miami HardRock"}
          </div>
          <hr class="my-1 w-1/6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="w-96 h-12 overflow-auto">
            <h3 className="text-md">
              {"701 First Avenue North, Minneapolis, United States"}
            </h3>
            <h3 className="text-md">{" Sunday, November 3, 2024 "}</h3>
          </div>
        </div>
        <div className="self-center">
          <Button isIconOnly variant="light" className="rounded-full w-1/2">
            <BsThreeDotsVertical color="white" size={28} />
          </Button>
        </div>
      </div>
      <div className="">
        <img
          src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/ftlauderdale/Property-Image-GH-prespective-Day-hi-res-2-2020pl_7670E52D-D424-46F0-BD7F0EED531C6600_3194cdc4-98cd-458e-a48e3a2b985a12fa.jpg"
          alt=""
          className="w-full h-[500px] object-cover "
        />
      </div>
      <div className="bg-gradient-to-tr from-cyan-900/25 to-blue-950/10 p-4">
        <h1
          className="p-2 text-8xl font-thin"
          style={{ textShadow: "1px 2px 2px black" }}
        >
          {"Miami HardRock"}
        </h1>

        <p className="p-2 text-lg text-slate-300">
          {
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat auctor ullamcorper. Aenean lorem neque, fringilla pulvinar massa a, accumsan aliquam diam. Sed tincidunt id enim eget tempor. Suspendisse condimentum nec lectus sit amet tincidunt. Donec fringilla arcu non ipsum ultrices sodales id sed turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean aliquam massa tincidunt malesuada aliquet. Praesent dignissim et velit vel molestie. Duis consequat eleifend nulla, et tempus ex mollis suscipit. Fusce accumsan dui elit, ac pharetra risus pulvinar sed. Aliquam semper nisi in risus maximus tempor. Sed justo neque, consectetur ac fermentum non, porta non elit. Fusce eu eros a mauris volutpat ornare et eu ex. Donec vel lacus bibendum, semper orci non, venenatis nisl. Cras scelerisque elementum orci ac pellentesque. "
          }
        </p>

        <div className="flex flex-row-reverse p-2 py-6">
          <Button
            size="lg"
            variant="bordered"
            className="bg-gradient-to-tr from-cyan-200/50 to-blue-950/10 text-slate-50 border-cyan-100 font-thin text-2xl py-8 rounded-full"
          >
            Read Comments
          </Button>
          <div className="p-2"></div>
          <Button
            size="lg"
            variant="bordered"
            className="bg-gradient-to-tr from-cyan-200/50 to-blue-950/10 text-slate-50 border-cyan-100 font-thin text-2xl py-8 rounded-full"
          >
            View Blogs
          </Button>
        </div>
      </div>
    </div>
  );
}
