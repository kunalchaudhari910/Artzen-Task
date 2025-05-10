import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <div className="p-4 shadow rounded bg-white">
    <h2 className="text-xl font-bold">{post.title}</h2>
    <p className="text-sm text-gray-500">by {post.author}</p>
    <p className="mt-2">{post.content.slice(0, 100)}...</p>
    <Link to={`/post/${post._id}`} className="text-blue-500 mt-2 block">Read More</Link>
  </div>
);

export default PostCard;
