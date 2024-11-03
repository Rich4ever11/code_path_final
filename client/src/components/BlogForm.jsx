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

export default function BlogForm({ isOpen, onClose, locationId, userId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [images, setImages] = useState([""]);
  const [rating, setRating] = useState(0);
  const [ratingSystem, setRatingSystem] = useState([0, 0, 0, 0, 0]);

  const convertListToString = (arrayValue) => {
    console.log(arrayValue);
    return "{" + arrayValue.join(",") + "}";
  };

  const handleBlogCreation = async () => {
    const ratingValue = ratingSystem.reduce(
      (partialSum, rate) => partialSum + rate,
      0
    );
    const requestBody = {
      location_id: parseInt(locationId),
      user_id: userId,
      title: title,
      description: description,
      blog_content: blogContent,
      images: convertListToString(images),
      rating: ratingValue,
    };
    const response = await blogAPI.createBlog(requestBody);
    onClose();
  };

  const handleListUpdate = (index, newValue, Array, updateArrayFunc) => {
    const newArray = [...Array];
    newArray[index] = newValue;
    updateArrayFunc(newArray);
  };

  const handleAddImage = (event) => {
    setImages([...images, ""]);
  };

  const handleRemoveImage = (event) => {
    try {
      images.pop();
      setImages([...images]);
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
                        onChange={(event) => setTitle(event.target.value)}
                      />
                    </div>
                    <div>
                      <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        size={"lg"}
                        variant="bordered"
                        className="text-white "
                        onChange={(event) => setDescription(event.target.value)}
                      />
                    </div>

                    <div>
                      <Textarea
                        label="Blog Content"
                        placeholder="Enter your Blog Text"
                        size={"lg"}
                        variant="bordered"
                        className="text-white "
                        onChange={(event) => setBlogContent(event.target.value)}
                      />
                    </div>

                    <div>
                      {images.map((imageInput, index) => (
                        <Input
                          className="text-white placeholder:text-white py-1"
                          size={"lg"}
                          label="Image"
                          variant="bordered"
                          onChange={(event) =>
                            handleListUpdate(
                              index,
                              event.target.value,
                              images,
                              setImages
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
                      {ratingSystem.map((rating, index) => (
                        <Checkbox
                          key={index}
                          defaultSelected
                          icon={<FaStar />}
                          color="warning"
                          isSelected={ratingSystem[index]}
                          value={ratingSystem[index]}
                          onValueChange={(value) => {
                            handleListUpdate(
                              index,
                              value,
                              ratingSystem,
                              setRatingSystem
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
