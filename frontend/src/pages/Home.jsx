import { useEffect, useState } from "react";
import { getPosts } from "../api";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Blog Posts</h1>
        <Link to="/create" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          + New Post
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="p-4 border rounded-lg shadow hover:shadow-lg bg-white">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">by {post.author}</p>
            <p className="mt-2 text-gray-700">{post.content.slice(0, 100)}...</p>
            <Link
              to={`/post/${post._id}`}
              className="text-blue-600 hover:underline mt-3 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
