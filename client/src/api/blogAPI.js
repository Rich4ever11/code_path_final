const getAllBlogs = async () => {
  try {
    const response = await fetch("/api/blog");
    const blogData = await response.json();
    return blogData.data;
  } catch {
    return [];
  }
};

const getBlogsById = async (blog_id) => {
  try {
    const response = await fetch(`/api/blog/${blog_id}`);
    const blogData = await response.json();
    return blogData.data;
  } catch {
    return [];
  }
};

const getBlogsByLocation = async (location_id) => {
  try {
    const response = await fetch(`/api/blog/location/${location_id}`);
    const blogData = await response.json();
    return blogData.data;
  } catch {
    return [];
  }
};

const createBlog = async (requestBody) => {
  try {
    const response = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    return { result: "success" };
  } catch {
    return { result: "error" };
  }
};

export default {
  getAllBlogs,
  createBlog,
  getBlogsByLocation,
  getBlogsById,
};
