import React from "react";
import PropTypes from "prop-types";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

function BlogCard({ imgURL, blogTitle }) {
  return (
    <div>
      <Card
        isFooterBlurred
        radius="lg"
        className="w-fit border-2 border-white/5"
      >
        <img src={imgURL[0]} className="h-[500px] w-72 object-cover" />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-2xl text-white overflow-auto h-[50px] px-2">
            {blogTitle}
          </p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            View Blog
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BlogCard;
