import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Input,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { UseUserContext } from "../context/userContext";
import blogAPI from "../api/blogAPI";

export default function Blogs() {
  const { currentUser, userDetails, userLoggedIn, loading } = UseUserContext();
  const navigate = useNavigate();
  const [blogSearch, setBlogSearch] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const handleBlogSearch = (searchQuery) => {
    const blogSearch = blogs;
    const filteredBlogs = blogSearch.filter((blog) =>
      blog.title.includes(searchQuery)
    );
    setBlogSearch(filteredBlogs);
  };

  useEffect(() => {
    const renderBlogData = async () => {
      const blogs = await blogAPI.getAllBlogs();
      setBlogs(blogs);
      setBlogSearch(blogs);
    };
    renderBlogData();
  }, []);

  const handleBlogNavigation = () => {};

  return (
    <div className="h-full px-10 bg-no-repeat bg-cover bg-center bg-fixed bg-[url('https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?q=80&w=2652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="m-8">
        <div className="py-8">
          <h1
            className="text-8xl text-white font-thin underline italic"
            style={{ textShadow: "1px 5px 5px black" }}
          >
            Blogs Finder
          </h1>
        </div>
        <div className="w-full py-4 flex">
          <Input
            type="search"
            size={"lg"}
            onChange={(event) => handleBlogSearch(event.target.value)}
            startContent={<CiSearch size={32} />}
          />
        </div>
      </div>

      <div className="max-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
        {blogSearch.map((blog) => (
          <Card className="col-span-12 sm:col-span-4 h-[300px] shadow-xl shadow-black">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <div className="h-20 overflow-y-scroll">
                <p className="text-2xl text-white/60 uppercase font-thin">
                  {blog.description}
                </p>
              </div>

              <h4
                className="text-white font-thin text-6xl"
                style={{ textShadow: "1px 5px 5px black" }}
              >
                {blog.title}
              </h4>
              <div className="py-4">
                <Button
                  size="md"
                  className="bg-black/50 border-2 border-white text-white shadow-lg font-normal"
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
                  View Blog
                </Button>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={blog.images[0]}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
