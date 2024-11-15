import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Checkbox,
} from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import blogAPI from "../api/blogAPI.js";
import { UseUserContext } from "../context/userContext";

export default function BlogForm({
  isOpen,
  onClose,
  blog_id,
  locationId,
  title,
  description,
  content,
  images,
  rating,
}) {
  const { currentUser, userDetails, userLoggedIn, loading } = UseUserContext();
  const [blogTitle, setBlogTitle] = useState(title || "");
  const [blogDescription, setBlogDescription] = useState(description || "");
  const [blogContent, setBlogContent] = useState(content || "");
  const [blogImages, setBlogImages] = useState(images || [""]);
  const [blogRating, setBlogRating] = useState(rating || 0);
  const [blogRatingSystem, setBlogRatingSystem] = useState([0, 0, 0, 0, 0]);

  const convertListToString = (arrayValue) => {
    return "{" + arrayValue.join(",") + "}";
  };

  const handleBlogCreation = async () => {
    const ratingValue = blogRatingSystem.reduce(
      (partialSum, rate) => partialSum + rate,
      0
    );
    const requestBody = {
      location_id: parseInt(locationId),
      user_id: userDetails.id,
      title: blogTitle,
      description: blogDescription,
      blog_content: blogContent,
      images: convertListToString(blogImages),
      rating: ratingValue,
    };
    const response = await blogAPI.createBlog(requestBody);
    onClose();
  };

  const handleBlogUpdate = async () => {
    try {
      const blogData = {
        blog_id: blog_id,
        title: blogTitle,
        description: blogDescription,
        blog_content: blogContent,
        images: convertListToString(blogImages),
        rating: ratingValue,
      };
      console.log(locationData);
      const result = await blogAPI.updateBlog(blogData);
      console.log("Blog Update Accomplished");
      onClose;
    } catch {
      console.log("Blog Update Failed: ", error);
    }
  };

  const handleLocationDeletion = async () => {
    try {
      const blogData = {
        blog_id: blog_id,
      };
      console.log(blogData);
      const result = await blogAPI.deleteLocation(blogData);
      console.log("Blog Update Accomplished");
    } catch {
      console.log("Blog Update Failed: ", error);
    }
  };

  const handleListUpdate = (index, newValue, Array, updateArrayFunc) => {
    const newArray = [...Array];
    newArray[index] = newValue;
    updateArrayFunc(newArray);
  };

  const handleAddImage = (event) => {
    setBlogImages([...blogImages, ""]);
  };

  const handleRemoveImage = (event) => {
    try {
      blogImages.pop();
      setBlogImages([...blogImages]);
    } catch {
      console.log("No Images");
    }
  };

  return (
    <div>
      <Modal
        size={"5xl"}
        isOpen={isOpen}
        onClose={onClose}
        className="bg-black/75 overflow-y-scroll h-fit"
      >
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white font-thin text-4xl">
                Blog Creation
              </ModalHeader>
              <div className="flex justify-center">
                <ModalBody>
                  <p className="font-thin text-3xl text-white">
                    You can begin creating your blog here and add extensive
                    detail about the specific location referenced. Be sure to
                    include insightful information and pictures so that your
                    blog stands out.
                  </p>

                  <div className="grid grid-flow-row space-y-2">
                    <div>
                      <Input
                        className="text-white placeholder:text-white"
                        size={"lg"}
                        label="Title"
                        variant="bordered"
                        value={blogTitle}
                        onChange={(event) => setBlogTitle(event.target.value)}
                      />
                    </div>
                    <div>
                      <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        size={"lg"}
                        variant="bordered"
                        className="text-white "
                        value={blogDescription}
                        onChange={(event) =>
                          setBlogDescription(event.target.value)
                        }
                      />
                    </div>

                    <div>
                      <Textarea
                        label="Blog Content"
                        placeholder="Enter your Blog Text"
                        size={"lg"}
                        variant="bordered"
                        className="text-white "
                        value={blogContent}
                        onChange={(event) => setBlogContent(event.target.value)}
                      />
                    </div>

                    <div>
                      {blogImages.map((imageInput, index) => (
                        <Input
                          className="text-white placeholder:text-white py-1"
                          size={"lg"}
                          label="Image"
                          variant="bordered"
                          onChange={(event) =>
                            handleListUpdate(
                              index,
                              event.target.value,
                              blogImages,
                              setBlogImages
                            )
                          }
                        />
                      ))}

                      <div className="flex flex-row-reverse py-2 ">
                        <Button
                          variant="bordered"
                          isIconOnly
                          className="rounded-full"
                          onPress={handleRemoveImage}
                        >
                          {" "}
                          <FaMinus color="white" />
                        </Button>
                        <div className="px-1"></div>
                        <Button
                          variant="bordered"
                          isIconOnly
                          className="rounded-full"
                          onPress={handleAddImage}
                        >
                          {" "}
                          <FaPlus color="white" />
                        </Button>
                      </div>
                    </div>

                    <div>
                      {blogRatingSystem.map((rating, index) => (
                        <Checkbox
                          key={index}
                          defaultSelected
                          icon={<FaStar />}
                          color="warning"
                          isSelected={blogRatingSystem[index]}
                          value={blogRatingSystem[index]}
                          onValueChange={(value) => {
                            handleListUpdate(
                              index,
                              value,
                              blogRatingSystem,
                              setBlogRatingSystem
                            );
                          }}
                        ></Checkbox>
                      ))}
                    </div>
                  </div>
                </ModalBody>
              </div>

              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="text-2xl py-6"
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  variant="bordered"
                  onPress={handleBlogCreation}
                  className="text-2xl py-6"
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
