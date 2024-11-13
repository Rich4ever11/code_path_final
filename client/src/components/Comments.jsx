import React, { useState } from "react";
import { Textarea, Button, Avatar } from "@nextui-org/react";
import commentsAPI from "../api/commentsAPI.js";
import { UseUserContext } from "../context/userContext";

export default function Comments({ commentsList, id, commentType }) {
  const { currentUser, userDetails, userLoggedIn, loading } = UseUserContext();
  const [comment, setComment] = useState("");

  const handleCommentCreation = async () => {
    try {
      if (commentType === "location") {
        const requestBody = {
          user_id: userDetails.id,
          location_id: id,
          comment: comment,
        };
        console.log(requestBody);
        const response = await commentsAPI.createLocationComment(requestBody);
        setComment("");
      } else if (commentType === "blog") {
        const requestBody = {
          user_id: userDetails.id,
          blog_id: id,
          comment: comment,
        };
      }
    } catch (error) {
      console.log("comment creation failed", error);
    }
  };

  return (
    <div className="py-20">
      <div className="">
        <div className="flex justify-center">
          <h2 className="text-white text-6xl font-thin italic py-4 underline">
            User Comments
          </h2>
        </div>

        <div className="">
          <div className="w-full p-10 flex bg-black/30 border-2 border-white/5 rounded-md shadow-lg shadow-black">
            <div className="border-medium border-cyan-100 rounded-full p-1 h-fit w-fit flex-none align-middle mr-4">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="w-24 h-24 text-large"
              />
            </div>
            <div className="flex-1">
              <Textarea
                label="Comment"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Enter your comment"
                className="max-full"
                onChange={(event) => setComment(event.target.value)}
              />

              <Button
                variant="bordered"
                className="my-2 border-cyan-100"
                onClick={handleCommentCreation}
              >
                Create Comment
              </Button>
            </div>
          </div>

          <div className="py-10 h-screen overflow-y-scroll">
            {commentsList.map((comment, index) => (
              <div
                className="w-full p-10 flex bg-black/30 border-2 border-white/5  shadow-lg shadow-black rounded-lg my-4 "
                key={index}
              >
                <div className="mr-4">
                  <div className="border-medium border-cyan-100 rounded-full p-1 h-fit w-fit flex-none align-middle">
                    <Avatar
                      src={comment.imgURL}
                      className="w-24 h-24 text-large"
                    />
                  </div>
                  <div className="flex justify-center font-thin text-white overflow-x-scroll w-28">
                    <p>{comment.user_name}</p>
                  </div>
                </div>

                <div>
                  <div className="font-thin text-xl text-gray/25 py-2">
                    {Date(comment.timestamp * 1000)}
                  </div>
                  <div className="max-h-96 overflow-y-scroll text-2xl py-2 font-thin">
                    <p className="">{comment.comment}</p>
                  </div>

                  {/* <div className="flex space-x-2 py-2">
                <Button
                  color="primary"
                  variant="bordered"
                  size="md"
                  className="text-xl text-cyan-200 border-cyan-200 "
                >
                  Update
                </Button>{" "}
                <Button
                  color="danger"
                  variant="bordered"
                  size="md"
                  className="text-xl text-red-700"
                >
                  Delete
                </Button>
              </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
