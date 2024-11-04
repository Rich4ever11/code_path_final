import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import BlogCard from "../components/BlogCard";
import BlogForm from "../components/BlogForm";
import { Button, useDisclosure } from "@nextui-org/react";
import blogAPI from "../api/blogAPI.js";
import { useNavigate } from "react-router-dom";
import locationAPI from "../api/locationAPI.js";

export default function Location() {
  const { location_id } = useParams();
  // handle obtaining users id
  const user_id = 1;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [location, setLocation] = useState({});
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const blogData = await blogAPI.getBlogsByLocation(location_id);
        const locationData = await locationAPI.getLocationById(location_id);
        setBlogs(blogData);
        setLocation(locationData[0]);
      } catch (error) {
        console.log(error);
        setBlogs([]);
      }
    };

    getBlogData();
  }, []);

  const handleOpenCreateBlogModal = () => {
    onOpen();
  };

  const textBlogs = [
    {
      imgURL:
        "https://images.unsplash.com/photo-1620052800096-e2861f0e1e3d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      blogTitle: "My favorite beach place",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhY2F0aW9ufGVufDB8fDB8fHww",
      blogTitle: "Where I found the best places to eat ;)",
    },
    {
      imgURL:
        "https://plus.unsplash.com/premium_photo-1664281095927-d6247c417f08?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
      blogTitle: "The Ice Cream Paradise",
    },
  ];

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
            {location.name || "None"}
          </div>
          <hr className="my-1 w-1/6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
          <div className="w-96 h-12 overflow-auto">
            <h3 className="text-md">
              {location.street_name || "None"}, {location.city || "None"},{" "}
              {location.country || "None"} {location.postal_code || "None"}
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
      <div className="bg-gradient-to-tr from-cyan-900/50 to-blue-950/10 p-4">
        <h1
          className="p-2 text-8xl font-thin"
          style={{ textShadow: "1px 2px 2px black" }}
        >
          {location.name || "None"}
        </h1>

        <p className="p-2 text-lg text-slate-300">
          {location.description || "None"}
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
            className="  text-slate-50 border-cyan-100 font-thin text-2xl py-8 rounded-full"
            onPress={() => handleOpenCreateBlogModal()}
          >
            Create A Blog
          </Button>
        </div>
        <div>
          <h2 className="text-white text-6xl font-thin italic py-4">
            {blogs.length > 0 ? "Recent Blog Posts" : "No Blogs Found"}
            <hr
              className={`text-white w-[420px] border-2 border-white mb-2`}
            ></hr>
          </h2>
          <div className="grid grid-flow-col auto-cols-max overflow-x-scroll">
            {blogs.map((blog, index) => (
              <div key={index}>
                <BlogCard
                  blogTitle={blog.title}
                  imgURL={[blog.images]}
                  blogId={blog.id}
                />
              </div>
            ))}
            {/* {textBlogs.map((blog, index) => (
              <div key={index}>
                <BlogCard blogTitle={blog.blogTitle} imgURL={[blog.imgURL]} />
              </div>
            ))} */}
          </div>
        </div>
      </div>

      <BlogForm
        isOpen={isOpen}
        onClose={onClose}
        locationId={location_id}
        userId={user_id}
      />
    </div>
  );
}
