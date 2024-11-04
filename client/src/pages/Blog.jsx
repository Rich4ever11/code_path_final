import React, { useState, useEffect } from "react";
import blogAPI from "../api/blogAPI.js";
import { useParams } from "react-router-dom";

export default function Blog() {
  const { blog_id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [paragraphs, setParagraphs] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const renderLocationData = async () => {
      const blog = await blogAPI.getBlogsById(blog_id);
      if (blog.length > 0) {
        setBlogData(blog[0]);
        const blogText = blog[0].blog_content
          .split("\n")
          .filter((paragraph) => paragraph !== "");
        const blogImages = blog[0].images;
        setParagraphs(blogText);
        setImages(blogImages);
      } else {
      }
    };
    renderLocationData();
  }, []);

  return (
    <div>
      <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    class="mr-4 w-16 h-16 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      class="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Jese Leos
                    </a>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p class="text-base text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        dateTime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 class="mb-4 text-6xl font-thin leading-tight text-gray-900 lg:mb-6 lg:text-7xl dark:text-white">
                {blogData.title}
              </h1>
            </header>

            {images.map((image) => (
              <figure className="py-4">
                <img src={image} alt="" />
                <div className="flex">
                  <figcaption className="font-thin text-gray-300 text-2xl">
                    Article Images
                  </figcaption>
                </div>
              </figure>
            ))}

            {paragraphs.map((paragraph, index) => (
              <div key={index}>
                <p class="lead py-2 font-thin text-2xl">{paragraph}</p>
              </div>
            ))}
          </article>
        </div>
      </main>

      <aside
        aria-label="Related articles"
        class="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div class="px-4 mx-auto max-w-screen-xl">
          <h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
        </div>
      </aside>
    </div>
  );
}
