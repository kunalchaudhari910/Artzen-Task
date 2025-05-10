import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getPost, deletePost } from "../api";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this post?")) {
      await deletePost(id);
      navigate("/");
    }
  };

  if (!post) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">By {post.author}</p>
      <p className="text-gray-800 whitespace-pre-line">{post.content}</p>

      <div className="mt-6 flex gap-4">
        <Link
          to={`/edit/${post._id}`}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
        <Link
          to="/"
          className="ml-auto px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Post;
